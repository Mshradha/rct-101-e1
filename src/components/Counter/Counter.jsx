import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setCount] = React.useState(0) ;
  const incrementCount = ()=>{
    setCount(count+1);
  }
  const decrementcount =()=>{
    setCount(count-1)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.btn} onClick={incrementCount}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className={styles.btn} onClick={decrementcount}>-</button>
    </div>
  );
};

export default Counter;
