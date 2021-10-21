import { useRef, useState, useEffect } from "react";
import getGas from "./getGas";
import etherscanApi from "etherscan-api";
import axios from "axios";

import { AlarmBox } from "./AlarmBox";
import { Graph } from "./Graph";

import KEYS from "./auth.js";

import "./App.css";

const api = etherscanApi.init("");

const parseTime = (date) => new Date(date).toUTCString().replace("GMT", "UTC");

const App = () => {
	const configRef = useRef();
	const [ggData, setGgData] = useState({
		prices: [],
		socket: null,
		rektFlag: false,
		updateCount: 0,
		lastUpdate: "",
		sums: [],
		sampleSize: 0,
		history: [],
	});
	// const [gasStats, setGasStats] = useState({ sums: [], sampleSize: 0, history: [] });
	const [EGSData, setEGSData] = useState({
		prices: [],
		sums: [0, 0, 0, 0],
		sampleSize: 0,
		history: [],
	});
	const [ethPrice, setEthPrice] = useState();
	const [txGasCost, setTxGasCost] = useState(21000);
	const [config, setConfig] = useState({ autoRetry: false, showGraph: true });

	const getEthPrice = async () => {
		let price = await api.stats.ethprice();
		setEthPrice(price.result.ethusd);
	};

	const getEthGasStation = async () => {
		let egsPrice = await axios.get(
			`https://ethgasstation.info/api/ethgasAPI.json?api-key=${KEYS.ethGasStationKey}`
		);
		let prices = [
			egsPrice.data.fastest,
			egsPrice.data.fast,
			egsPrice.data.average,
			egsPrice.data.safeLow,
		].map((x) => x / 10);
		setEGSData((prev) => {
			return {
				...prev,
				sampleSize: prev.sampleSize + 1,
				prices: prices,
				sums: prev.sums.map((item, index) => item + prices[index]),
				history: prev.history.concat([prices]),
			};
		});
	};

	useEffect(() => {
		getGas({ setGasData: setGgData, gasData: ggData, parseTime, config: configRef });
	}, []);

	useEffect(() => {
		configRef.current = config;
		// 	console.log("CONFIG IS CHANGED TO" + config);
	}, [config]);

	const ethPriceOracle = () => {
		getEthPrice();
		getEthGasStation();

		setInterval(() => getEthGasStation(), 5000);

		setInterval(() => getEthPrice(), 15000);
	};

	useEffect(() => ethPriceOracle(), []);

	const gasStartStop = () => {
		if (ggData.socket) {
			ggData.socket.close();
			console.log("killed connection");
			setGgData({ ...ggData, socket: undefined });
		} else {
			console.log("reconnecting...");
			getGas({ setGasData: setGgData, gasData: ggData, parseTime, config: configRef });
		}
	};

	const handleTxTypeInput = (event) => {
		setTxGasCost(event.target.value);
	};

	const renderPriceBoxes = () => {
		return ["rapid", "fast", "standard", "slow"].map((item, index) => {
			let txCost = ((ethPrice * ggData.prices[index] * txGasCost) / 10 ** 9).toFixed(2);
			return (
				<div className={`price-box ${item}`}>
					{item}:<div className="price">{ggData.prices[index]}</div>
					{isNaN(txCost) ? false : <span className="tx-cost">(${txCost})</span>}
				</div>
			);
		});
	};

	return (
		<div className="app">
			<div className="gas-widget">
				<div className="gas-frame-container">
					<div className="gas-frame">
						{renderPriceBoxes()}
						<div className="timestamp">
							<span>last update:</span>
							<span>{ggData.lastUpdate}</span>
							<span> (update count: {ggData.updateCount})</span>
						</div>
						<div className="eth-price-container">
							ETH: {ethPrice ? "$" + ethPrice : "disable adblock"}
						</div>
						<div className="kill-button-container">
							<button className="kill-button" onClick={() => gasStartStop()}>
								{ggData.rektFlag === "neutral"
									? "Connecting..."
									: ggData.socket
									? "KILL"
									: ggData.rektFlag
									? "Retry"
									: "Connect"}
							</button>
							{ggData.rektFlag === true ? (
								<span className="autoconnect-checkbox">
									<input
										type="checkbox"
										id="autoconnect"
										checked={config.autoRetry}
										// onChange={(e) =>{
										// 	console.log(e.target.value);
										// 	setConfig({ ...config, autoRetry: e.target.value })}
										// }
										onChange={() => {
											setConfig((pre) => {
												console.log("CONFIG IS CHANGED TO ", {
													ref: configRef.current,
												});
												// if (!pre.autoRetry) gasStartStop();
												console.log({ onchange: pre.autoRetry });
												return { ...pre, autoRetry: !pre.autoRetry };
											});
											configRef.current = config;
										}}
									/>
									<label> auto?</label>
								</span>
							) : null}
						</div>

						<div className="tx-select">
							<label htmlFor="gasCostInput">tx type: </label>
							<select id="gasCostInput" onChange={handleTxTypeInput}>
								<option value={21000}>send ETH</option>
								<option value={65000}>send ERC20</option>
								<option value={175000}>LP</option>
								<option value={200000}>SWAP</option>
							</select>
						</div>
					</div>
				</div>
				<AlarmBox gasData={ggData} />
			</div>
			<div className="graph-info-box">
				<div>ETH Gas Station API</div>
				{EGSData.prices.map((item) => (
					<div>{item}</div>
				))}
			</div>
			<div className="temp-alarm">
				<AlarmBox gasData={EGSData} />
			</div>
			{config.showGraph ? <Graph gasStats={ggData.rektFlag ? EGSData : ggData} /> : null}
		</div>
	);
};

export default App;
