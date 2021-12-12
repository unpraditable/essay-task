import { useCallback, useMemo, useState } from "react";

export default function MyComponent({ headerText, children }) {
  const [clicks, setClicks] = useState(0);

  // function clickHandler() {
  //   setClicks(clicks + 1);
  // }

  const clickHandler = useCallback(() => {
    setClicks(clicks + 1);
  }, [clicks]);

  // const clickHandler = useMemo(() => setClicks(clicks + 1), [clicks]);

  return (
    <div className="my-component">
      <h2>My Component ({clicks}) </h2>

      <button onClick={clickHandler}>Click Me!</button>

      <h3>{headerText}</h3>

      <ul>
        {children.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
