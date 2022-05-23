import React from "react";
import AddTask from "./components/AddTask/AddTask";

import TaskHeader from "./components/TaskHeader/TaskHeader";

function App() {
  return <div>
    <div>
      <TaskHeader/>
    </div>
    <div>
      <AddTask/>
    </div>
  </div>;
}

export default App;
