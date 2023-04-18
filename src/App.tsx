import { useEffect, useRef } from "react";
import createWorld from "./World/world";
import "./styles/main.css";
const App = () => {
  const container = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const world = createWorld(container.current);
    (async () =>
      await world.init().catch((error: Error) => console.error(error)))();
    world.appendRendererToContainer();
    world.start();
    return () => {
      world.removeRendererFromContainer();
    };
  }, []);

  return (
    <main>
      <div id="scene-container" ref={container}></div>
    </main>
  );
};

export default App;
