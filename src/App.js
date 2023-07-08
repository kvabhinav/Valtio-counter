import { useSnapshot } from "valtio";
import state from "./state";

import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";

function App() {
  const snap = useSnapshot(state)
  return (
    <div className="App">
     <h1>{snap.count}</h1>
     <IncrementButton/>
     <DecrementButton/>
    </div>
  );
}

export default App;
