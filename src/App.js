import React, { Component } from "react";
import "./App.css";
import ChatBox from "./Components/chatBox";
import Navbar from "./Components/Navbar";
import Tagline from "./Components/Tagline";

export default class App extends Component {
  state = {
    clicked: false
  };

  toggleChatBox = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <div>
        <header>
          <div
            className="container-fluid header-hero"
            style={{ height: "100%" }}
          >
            <Navbar />
            <Tagline />

            <div className="row align-items-center">
              {/* ChatBox */}
              {
                //Check if button clicked
                this.state.clicked ? <ChatBox /> : null
              }

              <button
                className="animate__animated animate__shakeY animate__delay-1s tear btn mb-4 mx-md-5 mx-3"
                onClick={this.toggleChatBox}
              >
                <img
                  src={require(!this.state.clicked
                    ? "./Images/Sparrow Bird.png"
                    : "./Images/clear-black-18dp.svg")}
                  alt="Previous"
                  data="0"
                  style={{ width: "25px" }}
                />
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
