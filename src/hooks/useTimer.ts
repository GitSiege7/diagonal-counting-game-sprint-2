import { useState, useEffect } from "react";

// Hook inputs for Timer length
interface TimerOptions {
	duration: number;
}

// Custom hook to make intutive interface for working with timer
export const useTimer = ({ duration }: TimerOptions) => {
	// Define state
	const [currSeconds, setCurrSeconds] = useState<number>(duration);

	// Use Effect to set up / clean up interval
	useEffect(() => {
		// Set up interval on render
		const interval = setInterval(() => {
			setCurrSeconds((p) => p - 1);
		}, 1000);

		// Clear interval on dismount
		return () => clearInterval(interval);
	}, [currSeconds]);

	// Define methods for interfacing with timer
	const resetTimer = () => setCurrSeconds(duration);

	return { currSeconds, resetTimer, setCurrSeconds };
};
