import styles from "../public/styles/styles.module.css";

function ChatItem({ item }) {
	return (
		<div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
			{item.message}
		</div>
	);
}

export default ChatItem;
