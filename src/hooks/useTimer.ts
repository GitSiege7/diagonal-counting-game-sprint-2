import { useState, useEffect } from "react";

// Hook inputs for Timer length and function to run on expiration
interface TimerOptions {
	duration: number;
	onExpiration: () => void;
}

// Custom hook to make intutive interface for working with timer
export const useTimer = ({ duration, onExpiration }: TimerOptions) => {
	// Define state
	const [currSeconds, setCurrSeconds] = useState<number>(duration);

	// Use Effect to set up / clean up interval
	useEffect(() => {
		// Set up interval on render
		const interval = setInterval(() => {
			if (currSeconds > 0) {
				setCurrSeconds((p) => p - 1);
			} else if (currSeconds == 0) {
				onExpiration();
			}
		}, 1000);

		// Clear interval on dismount
		return () => clearInterval(interval);
	}, [currSeconds, onExpiration]);

	// Define methods for interfacing with timer
	const resetTimer = () => setCurrSeconds(duration);

	return { currSeconds, resetTimer };
};
