import anime from "animejs";
import { useEffect, useState } from "react";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 15;

const DotGrid = () => {
  const [simulationActive, setSimulationActive] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start the simulation when the component mounts
    startSimulation();
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId as unknown as number);
    };
  }, []);

  const startSimulation = () => {
    if (!simulationActive) {
      setSimulationActive(true);
      const id = setInterval(() => {
        // Generate random indices within the grid dimensions
        const x = Math.floor(Math.random() * GRID_WIDTH);
        const y = Math.floor(Math.random() * GRID_HEIGHT);

        // Calculate the index based on the generated coordinates
        const index = x + y * GRID_WIDTH;

        // Trigger the click event on the randomly selected dot
        const target = document.querySelector(`[data-index="${index}"]`);
        if (target instanceof HTMLElement) {
          target.click(); // Simulate click
        }

        // Stop the simulation after a certain condition is met
        // For example, after simulating 100 clicks
        if (Math.random() > 0.98) {
          clearInterval(id);
          setSimulationActive(false);
        }
      }, 3500); // Adjust the interval time as needed

      setIntervalId(id);
    }
  };

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-zinc-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-rose-500 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute left-0 top-[80%] z-0 grid max-w-[75%] -translate-y-[50%]"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
