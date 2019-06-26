import React from "react";
import Todo from "./templates/todo";
import Weather from "./templates/api_simple";
class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Weather />
        {/* A JSX comment */}
      </div>
    );
  }
}

export default App;
