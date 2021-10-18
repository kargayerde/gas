import "./Graph.css";

export const Graph = ({ gasStats }) => {
	const COLORS = {
		RED: "rgb(247, 26, 0)",
		YELLOW: "rgb(255, 237, 48)",
		GREEN: "rgb(0, 135, 57)",
		PURPLE: "rebeccapurple",
	};

	const renderLines = () => {
		let means = gasStats.sums.map((item, index) => {
			let avg = item / gasStats.sampleSize;
		});
	};

	const renderBars = () => {
		// console.log({renderbars: gasStats.history});
		return gasStats.history.map((array, index) => {
			let offset = (index + 1) * 10;
			// console.log({array});
			const drawBar = () =>
				array.map((item, index) => {
					let colorArr = Object.values(COLORS);
					let style = {
						height: `${item * 1.3}px`,
						width: "4px",
						position: "absolute",
						bottom: "5px",
						left: `${offset + 5}px`,
						background: `${colorArr[index]}`,
						zIndex: `${100 + index}`,
					};
					return <span style={style}></span>;
				});

			return <span>{drawBar()}</span>;
		});
	};

	return (
		<div className="graph-container">
			<div className="graph-info-box">
				<div>ETH Gas Station API</div>
				{gasStats.prices.map((item, index) => (
					<div>{item}</div>
				))}
			</div>
			{renderBars()}
		</div>
	);
};
