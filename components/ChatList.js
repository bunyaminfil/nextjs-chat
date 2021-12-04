import styles from "../public/styles/styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from 'react-scrollable-feed'

const Chatlist = () => {
  const {messages} = useChat();
  return <div className={styles.chatlist}>
      <ScrollableFeed forceScroll>
      {messages.map((item,key)=>(
          <ChatItem key={key} item={item}/>
      ))}
      </ScrollableFeed>
  </div>;
};

export default Chatlist;
