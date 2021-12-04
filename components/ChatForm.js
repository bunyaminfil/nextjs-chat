import { useState } from "react";
import styles from "../public/styles/styles.module.css";
import { sendMessage } from "../socket";
import { useChat } from "../context/ChatContext";

function ChatForm() {
	const [message, setMessage] = useState("");

	const { setMessages } = useChat();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(message);

		setMessages((prevState) => [...prevState, { message, fromMe: true }]);
		sendMessage(message);
		setMessage("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.textInput}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default ChatForm;
