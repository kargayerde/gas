const convWeiToGwei = (wei) => wei / 10 ** 9;

const getGas = ({ setGasData, gasData, parseTime, config }) => {
	let messageCount = 0;

	setGasData({ ...gasData, rektFlag: "neutral" });

	console.log(`opening websocket`);

	const socket = new WebSocket("wss://gasgas.io/prices");

	socket.onopen = (e) => {
		console.log("websocket connected");
		setGasData({ ...gasData, socket: socket, rektFlag: false });
	};

	socket.onmessage = (e) => {
		messageCount++;
		let priceData = Object.values(JSON.parse(e.data).data).map((value, index) => {
			return index === 4 ? parseTime(value) : convWeiToGwei(value).toFixed(1);
		});
		let prices = priceData.slice(0, 4);
		let timestamp = priceData[4];
		setGasData((prev) => {
			return {
				socket: socket,
				prices: [...prices],
				updateCount: messageCount,
				lastUpdate: timestamp,
				sums:
					prev.sampleSize === 0
						? prices
						: prev.sums.map((item, index) => Number(item) + Number(prices[index])),
				sampleSize: prev.sampleSize + 1,
				history: [...prev.history].concat([prices]),
			};
		});
	};

	socket.onclose = (e) => {
		if (e.wasClean) {
			console.log(`${e.code}: Connection closed cleanly`);
		} else {
			console.log(`${e.code}: Connection rekt`);
			setGasData({
				...gasData,
				prices: ["R", "E", "K", "T", "gasgas.io api rekt", "ded"],
				rektFlag: true,
			});
			console.log({ config });
			if (config.autoRetry) {
				console.log({ auto: config.autoRetry });
				setTimeout(() => {
					getGas({ setGasData, gasData, parseTime, config });
					console.log(`getting gas`);
				}, 15000);
			}
		}
	};

	socket.onerror = (e) => {
		console.log({ onerror: e });
	};
};

export default getGas;
