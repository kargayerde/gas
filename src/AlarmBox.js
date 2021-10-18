import { useState, useEffect } from "react";
import { cross, refresh, plus } from "./assets/img";

import soundFile from "./assets/asdf.wav";

import "./AlarmBox.css";

const STATUS = {
	SET: "set",
	RINGING: "ringing",
	SNOOZED: "snoozed",
};

export const AlarmBox = ({ gasData }) => {
	const [alarmInput, setAlarmInput] = useState();
	const [alarms, setAlarms] = useState([]);

	let sound = new Audio(soundFile);

	const filterNaNfromInput = (e) => {
		const allowedKeys = [
			"Backspace",
			"Delete",
			"Home",
			"End",
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
		];

		if (!allowedKeys.find((item) => item === e.key) && isNaN(e.key)) e.preventDefault();
	};

	const handleAlarmKeyDown = (e) => {
		if (e.key === "Enter") handleAddAlarm();
		filterNaNfromInput(e);
	};

	const handleAlarmWheel = (e) => {
		let input = isNaN(alarmInput) ? 0 : alarmInput;
		input = Number(input) + e.deltaY / -50;
		setAlarmInput(Math.max(input, 0));
	};

	const checkAlarm = (alarms) => {
		if (!gasData) return;

		alarms.find((item, index) => {
			if (!(Number(item.value) >= gasData.prices[2])) {
				return;
			} else {
				if (alarms[index].status !== STATUS.RINGING) {
					let nextAlarms = [...alarms];
					nextAlarms[index].status = STATUS.RINGING;

					setAlarms(nextAlarms);
					sound.play();
				}
			}
		});
	};

	const handleAddAlarm = () => {
		if (alarmInput <= 9999 && !alarms.find((item) => item.value === alarmInput)) {
			let newAlarm = { value: alarmInput, status: STATUS.SET };
			setAlarms([newAlarm, ...alarms].sort((a, b) => b.value - a.value));
		}
	};

	const handleClearAlarm = (index) => {
		let newAlarms = [...alarms];
		newAlarms.splice(index, 1);
		setAlarms(newAlarms);
	};
	const handleResetAlarm = (index) => {
		let newAlarms = [...alarms];
		newAlarms[index].status = STATUS.SET;
		setAlarms(newAlarms);
	};
	useEffect(() => {
		checkAlarm(alarms);
	}, [gasData]);

	const getAlarmClass = (index) => {
		return alarms[index].status === STATUS.RINGING ? "alert" : "";
	};

	const displayAlarms = () => {
		return alarms.map((item, index) => (
			<div key={index} className={`alarm-box alarm-${index + 1} ${getAlarmClass(index)}`}>
				<div className="alarm-box-text-box">
					<span>⏰</span>
					<span>{item.value}</span>
					<span>gwei</span>
				</div>

				<div className="small-button-box">
					{item.status === STATUS.RINGING ? (
						<button
							className="alarm-clear-button small-button"
							onClick={() => handleResetAlarm(index)}
						>
							<img src={refresh} />
						</button>
					) : (
						false
					)}

					<button
						className="alarm-reset-button small-button"
						onClick={() => handleClearAlarm(index)}
					>
						<img src={cross} />
					</button>
				</div>
			</div>
		));
	};
	return (
		<div className="alarm-box-container">
			<div className="add-alarm-container">
				<input
					className="add-alarm-input"
					// type="number"
					// min="1"
					// max="9999"
					// autofocus="true"
					maxlength="4"
					onChange={(e) => setAlarmInput(e.target.value)}
					onKeyDown={handleAlarmKeyDown}
					onWheel={handleAlarmWheel}
					value={alarmInput === 0 ? "" : alarmInput}
					placeholder="alarm"
				/>
				<button className="add-alarm-button" placeholder="alarm" onClick={handleAddAlarm}>
					<img src={plus} />
				</button>
			</div>
			{displayAlarms()}
		</div>
	);
};
