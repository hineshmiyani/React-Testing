import { CounterTwoProps } from "./CounterTwo.types";

const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement ? (
        <button onClick={props.handleIncrement}>Increment</button>
      ) : null}
      {props.handleDecrement ? (
        <button onClick={props.handleDecrement}>Decrement</button>
      ) : null}
    </div>
  );
};

export default CounterTwo;
