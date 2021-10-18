const convWeiToGwei = (wei) => wei / 10 ** 9;

const calcAverages = ({ setGasStats, prices }) => {
	setGasStats((prevGasStats) => ({
		sums:
			prevGasStats.sampleSize === 0
				? prices.slice(0, 4)
				: prevGasStats.sums.map((item, index) => Number(item) + Number(prices[index])),
		sampleSize: prevGasStats.sampleSize + 1,
		history: [...prevGasStats.history].concat([prices.slice(0, 4)]),
	}));
};

const getGas = ({ setGasData, gasData, parseTime, setGasStats, config }) => {
	let messageCount = 0;
	let autoRetry = config.autoRetry;

	setGasData({ ...gasData, rektFlag: "neutral" });

	console.log(`opening websocket`);

	const socket = new WebSocket("wss://gasgas.io/prices");

	socket.onopen = (e) => {
		console.log("websocket connected");
		setGasData({ ...gasData, socket: socket, rektFlag: false });
	};

	socket.onmessage = (e) => {
		messageCount++;
		let prices = Object.values(JSON.parse(e.data).data).map((value, index) => {
			return index === 4 ? parseTime(value) : convWeiToGwei(value).toFixed(1);
		});
		setGasData({ socket: socket, prices: [...prices, messageCount] });
		calcAverages({ setGasStats, prices });
	};

	socket.onclose = (e) => {
		if (e.wasClean) {
			console.log(`${e.code}: Connection closed cleanly`);
		} else {
			console.log(`${e.code}: Connection rekt`);
			setGasData({
				...gasData,
				prices: ["R", "E", "K", "T", "gasgas.io api rekt", "retry"],
				rektFlag: true,
			});
			if (autoRetry)
				setTimeout(() => {
					getGas({ setGasData, gasData, parseTime, setGasStats, config });
					console.log(`getting gas`);
				}, 15000);
		}
	};

	socket.onerror = (e) => {
		console.log({ onerror: e });
	};
};

export default getGas;
