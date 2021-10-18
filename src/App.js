import { useState, useEffect } from "react";
import getGas from "./getGas";
import etherscanApi from "etherscan-api";

import { AlarmBox } from "./AlarmBox";

import "./App.css";

const api = etherscanApi.init("");

const parseTime = (date) => new Date(date).toUTCString().replace("GMT", "UTC");

function App() {
	const [gasData, setGasData] = useState({ prices: [], socket: null, rektFlag: false });
	const [gasStats, setGasStats] = useState({ sums: [], sampleSize: 0, history: [] });
	const [ethPrice, setEthPrice] = useState();
	const [txGasCost, setTxGasCost] = useState(21000);
	const [config, setConfig] = useState({ autoRetry: false, showGraph: false });

	const getEthPrice = async () => {
		let price = await api.stats.ethprice();
		setEthPrice(price.result.ethusd);
	};

	useEffect(() => {
		getGas({ setGasData, gasData, parseTime, setGasStats, config });
	}, []);

	const ethPriceOracle = () => {
		getEthPrice();
		setInterval(async () => {
			await getEthPrice();
		}, 15000);
	};

	useEffect(() => ethPriceOracle(), []);

	const gasStartStop = () => {
		if (gasData.socket) {
			gasData.socket.close();
			console.log("killed connection");
			setGasData({ ...gasData, socket: undefined });
		} else {
			console.log("reconnecting...");
			getGas({ setGasData, gasData, parseTime, setGasStats, gasStats, config });
		}
	};

	const handleTxTypeInput = (event) => {
		setTxGasCost(event.target.value);
	};

	const renderPriceBoxes = () => {
		return ["rapid", "fast", "standard", "slow"].map((item, index) => {
			let txCost = ((ethPrice * gasData.prices[index] * txGasCost) / 10 ** 9).toFixed(2);
			return (
				<div className={`price-box ${item}`}>
					{item}:<div className="price">{gasData.prices[index]}</div>
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
							<span>{gasData.prices[4]}</span>
							<span> (update count: {gasData.prices[5]})</span>
						</div>
						<div className="eth-price-container">
							ETH: {ethPrice ? "$" + ethPrice : "disable adblock"}
						</div>
						<div className="kill-button-container">
							<button className="kill-button" onClick={() => gasStartStop()}>
								{gasData.rektFlag === "neutral"
									? "Connecting..."
									: gasData.socket
									? "KILL"
									: gasData.rektFlag
									? "Retry"
									: "Connect"}
							</button>
							{gasData.rektFlag === true ? (
								<span className="autoconnect-checkbox">
									<input
										type="checkbox"
										id="autoconnect"
										checked={config.autoRetry}
										// onChange={(e) =>{
										// 	console.log(e.target.value);
										// 	setConfig({ ...config, autoRetry: e.target.value })}
										// }
										onChange={() => setConfig((pre) => {
											if (!pre.autoRetry) gasStartStop();
											return {...pre, autoRetry: !pre.autoRetry};
										})}
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
				<AlarmBox gasData={gasData} />
			</div>
		</div>
	);
}

export default App;
