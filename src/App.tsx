import GameBoard from "./GameBoard/GameBoard";
import { ClerkProvider } from "@clerk/clerk-react";
import "./App.css";

// Grab pub Clerk key
const PUB_KEY_CLERK = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
	return (
		<ClerkProvider publishableKey={PUB_KEY_CLERK}>
			<GameBoard />
		</ClerkProvider>
	);
}

export default App;
