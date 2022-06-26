import Board from "./components/Board";
import TrelloProvider from "./contextApi";

function App() {
  return (
    <TrelloProvider>
      <Board />
    </TrelloProvider>
  );
}

export default App;
