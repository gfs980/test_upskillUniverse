import React, { useState } from "react";

// Task 1: Greeting Component with Props
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = React.memo(({ name }) => {
  return <h1>Hello, {name}!</h1>;
});

const App: React.FC = () => {
  // Task 2: useState Hook for Toggle
  const [isOn, setIsOn] = useState(false);

  // Task 3: Array Algorithm for Even Numbers
  const numbers = [1, 2, 3, 4, 5, 6];

  const getEvenNumbers = React.useCallback((arr: number[]) => {
    return arr.filter((number) => number % 2 === 0);
  }, []);

  const evenNumbers = React.useMemo(
    () => getEvenNumbers(numbers).join(", "),
    [numbers]
  );

  const handleToggle = React.useCallback(() => {
    setIsOn((val) => !val);
  }, []);

  return (
    <div>
      {/* Toggle Button for Task 2 */}
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>

      {/* Display Even Numbers for Task 3 */}
      <p>Even numbers: {evenNumbers}</p>

      {/* Conditional Rendering for Task 4 */}
      {isOn ? <Greeting name="John" /> : <p>Greeting is hidden</p>}
    </div>
  );
};

export default App;
