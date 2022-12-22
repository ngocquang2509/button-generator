import React from "react";

class UncontrolledForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert(this.input.current.value + " was submitted");
    e.preventDefault();
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" defaultValue="Ngoc" ref={this.input} />
          <button type="submit"></button>
        </form>
      </>
    );
  }
}

export default UncontrolledForm;
