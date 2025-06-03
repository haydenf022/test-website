import { useState } from "react";
import { Logos } from "./components/Logos.tsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-700 h-screen w-screen">
      <div className="flex flex-col items-center">
        <Logos />
        <Button onClick={() => setCount(() => count + 1)}>
          Counter is at {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
