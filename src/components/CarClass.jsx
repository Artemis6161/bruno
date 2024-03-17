import { Component } from "react";

export class CarClass extends Component {
  constructor() {
    super();
    this.state = { color: "red color" };
  }
  render() {
    return (
      <>
        <div>CarClass color is {this.state.color}</div>;
        <button
          onClick={() => {
            this.setState({ color: "blue" });
          }}
        >
          change
        </button>
      </>
    );
  }
}

export default CarClass;
