import { ChatProvider } from "../context/ChatContext";
import Container from '../components/Container';

function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Container />
      {/* <Component {...pageProps} /> */}
    </ChatProvider>
  );
}

export default MyApp;
