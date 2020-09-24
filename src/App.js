import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalOpen: false
  }

  showModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalOpen ? <Modal show={this.state.modalOpen} closed={this.closeModal} /> : null}
        {this.state.modalOpen ? <Backdrop show={this.state.modalOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
