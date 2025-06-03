import { useState } from "react";
import { Logos } from "./components/logos.tsx";
import { Button } from "./components/ui/button.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center">
        <Logos />
        <Button variant="secondary" onClick={() => setCount(() => count + 1)}>
          Counter is at {count}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
