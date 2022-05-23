import React from "react";

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <div className="header1">
        <h1>Todo List</h1>
        <p>You Have </p>
      </div>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
