import React, { useRef, useEffect, useState } from "react";

import { AlarmBox } from "./AlarmBox";

import "./Graph.css";

export const Graph = ({ gasStats }) => {
	const COLORS = {
		RED: "rgb(247, 26, 0)",
		YELLOW: "rgb(255, 237, 48)",
		GREEN: "rgb(0, 135, 57)",
		PURPLE: "rebeccapurple",
	};
	const chartSpacing = 10;

	const autoScrollRef = useRef();
	const [autoScroll, setAutoScroll] = useState(true);

	const findMeans = ({ historyArray }) =>
		historyArray.map((array) => array.reduce((a, b) => Number(a) + Number(b)) / 4);

	const scrollGraph = ({ event, element }) => {
		element.scrollBy(event.deltaY, 0);

		let maxScroll = element.scrollWidth - element.clientWidth;
		setAutoScroll(element.scrollLeft === maxScroll ? true : false);
	};

	// let positions = [...Array(500).keys()].map(() => Math.random() * Math.random() * 500 + 30);

	const renderLines = ({ positions, offset }) => {
		return (
			<div
				className="line-graph-container"
				onWheel={(e) => scrollGraph({ event: e, element: e.target.parentNode })}
			>
				{positions.map((item, index) => {
					let viewport = window.innerHeight;
					let x1 = index * offset;
					let x2 = (index + 1) * offset;
					let y1 = viewport - Number(item);
					let y2 = viewport - Number(positions[index + 1]);
					if (!y2)
						return (
							<React.Fragment>
								<span
									className="line-graph-point"
									onWheel={(e) =>
										scrollGraph({
											event: e,
											element: e.target.parentNode.parentNode,
										})
									}
									style={{
										left: `${x1 + 10}px`,
										bottom: `${item}px`,
									}}
								></span>
								<span
									ref={autoScrollRef}
									className="absence"
									style={{
										left: `${x1 + 200}px`,
									}}
								></span>
							</React.Fragment>
						);
					return (
						<React.Fragment>
							<span
								className="line-graph-point"
								onWheel={(e) =>
									scrollGraph({
										event: e,
										element: e.target.parentNode.parentNode,
									})
								}
								style={{
									left: `${x1 + 10}px`,
									bottom: `${item}px`,
								}}
							></span>
							<svg
								index={index}
								className={`line line-${index}`}
								onWheel={(e) =>
									scrollGraph({
										event: e,
										element: e.target.parentNode.parentNode,
									})
								}
								style={{
									position: "absolute",
									left: "10px",
									overflow: "visible",
									opacity: "1",
								}}
							>
								<line
									id={`line-${index}`}
									style={{ strokeWidth: 3, stroke: "hsl(190, 97%, 60%)" }}
									x1={x1 + 1.4} // sqrt2 ~= 1.4
									x2={x2 + 1.4} // point edge 4px
									y1={y1}
									y2={y2}
								/>
							</svg>
						</React.Fragment>
					);
				})}
			</div>
		);
	};

	const renderBars = () => {
		return gasStats.history.map((array, index) => {
			let offset = (index + 1) * chartSpacing;

			const drawBar = () =>
				array.map((item, index) => {
					let colorArr = Object.values(COLORS);
					let style = {
						height: `${item}px`,
						width: "4px",
						position: "absolute",
						bottom: "0px",
						left: `${offset}px`,
						background: `${colorArr[index]}`,
						zIndex: `${100 + index}`,
					};
					return (
						<span
							className="graph-bar"
							onWheel={(e) =>
								scrollGraph({
									event: e,
									element: e.target.parentNode.parentNode,
								})
							}
							style={style}
						></span>
					);
				});

			return (
				<span
					className="bar-container"
					onWheel={(e) =>
						scrollGraph({
							event: e,
							element: e.target.parentNode,
						})
					}
				>
					{drawBar()}
				</span>
			);
		});
	};

	useEffect(() => {
		if (autoScrollRef.current && autoScroll)
			autoScrollRef.current.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "center",
			});
	}, [renderBars()]);

	if (!gasStats.history[0]) {
		console.log({ failed: gasStats });
		return null;
	}

	console.log({ passed: gasStats });


	return (
		<React.Fragment>
			<div className="graph-info-box">
				<div>ETH Gas Station API</div>
				{gasStats.prices.map((item) => (
					<div>{item}</div>
				))}
			</div>
			<div className="temp-alarm">
				<AlarmBox gasData={gasStats} />
			</div>

			{autoScroll ? null : <div className="autoscroll-info">autoscroll paused</div>}
			<div
				className="graph-container"
				onWheel={(e) => scrollGraph({ event: e, element: e.target })}
			>
				{renderLines({
					positions: findMeans({ historyArray: gasStats.history }),
					offset: chartSpacing,
				})}

				{renderBars()}
			</div>
		</React.Fragment>
	);
};
