const convWeiToGwei = (wei) => wei / 10 ** 9;

const getGas = ({ setGasData, gasData, parseTime }) => {
	let messageCount = 0;

	console.log(`opening websocket`);

	const socket = new WebSocket("wss://gasgas.io/prices");

	socket.onopen = (e) => {
		console.log("websocket connected");
		setGasData({ ...gasData, socket: socket });
	};

	socket.onmessage = (e) => {
		messageCount++;
		let prices = Object.values(JSON.parse(e.data).data).map((value, index) => {
			return index === 4 ? parseTime(value) : convWeiToGwei(value).toFixed(1);
		});
		setGasData({ socket: socket, prices: [...prices, messageCount] });
	};

	socket.onclose = (e) => {
		if (e.wasClean) {
			console.log(`${e.code}: Connection closed cleanly`);
		} else {
			console.log(`${e.code}: Connection rekt`);
		}
	};

	socket.onerror = (e) => {
		console.log({ onerror: e.message });
	};
};

export default getGas;
