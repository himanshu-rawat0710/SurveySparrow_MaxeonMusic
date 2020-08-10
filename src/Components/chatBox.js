import React, { Component } from "react";
import "./chatbox.css";
import ChatDialogBox from "./chatDialogBox";

function renderBox(chat, toggleChatBox) {
  if (chat) {
    return (
      <div
        className="animate__animated animate__fadeIn  py-5 mx-5"
        style={{
          position: "absolute",
          right: "0",
          bottom: "60px",
          marginRight: "20px"
        }}
      >
        {/* For demo purpose */}

        <div className="row rounded-lg overflow-hidden shadow mr-md-3 ">
          {/* Users box */}
          <div className="col-12 px-0">
            <div className="bg-white">
              {/* hello */}
              <div className="col-12 px-0">
                <div className=" bg-white">
                  <div className="media w-100 ml-auto mb-3">
                    <div className="card py-3 px-3 rounded">
                      <div
                        className="card-body rounded"
                        style={{ backgroundColor: "#7f8ac5" }}
                      >
                        <h5
                          className="card-title px-3 text-white"
                          style={{ fontSize: "30px", fontWeight: "400" }}
                        >
                          Hi There
                        </h5>
                        <p className="card-text px-3 text-white">
                          Hello Ask Us Anything, Share Your Feedback.{" "}
                        </p>
                        {/* <a href="/#" className="btn btn-success circular-design">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Box */}
              <div className="col-12 px-0">
                <div className="px-1 py-3 bg-white">
                  <div className="col-12 px-0">
                    <div className=" bg-white">
                      <div className="media w-100 ml-auto mb-3">
                        <div className=" px-3 rounded">
                          <div className="card-body rounded">
                            <h6
                              className="card-title px-4"
                              style={{ fontSize: "20px", fontWeight: "600" }}
                            >
                              Start a Conversation
                            </h6>
                            <p className="card-text px-4">
                              The team typically replies in few minutes{" "}
                            </p>
                            <a
                              href="/#"
                              className="ml-md-4 ml-sm-1 w-75 btn btn-success circular-design"
                              style={{ padding: "13px 0 13px 25px" }}
                              onClick={toggleChatBox}
                            >
                              New Conversation{" "}
                              <img
                                className="ml-md-4"
                                style={{ width: "35px", height: "35px" }}
                                src={require("../Images/send-white.svg")}
                                alt="Send"
                                data="0"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Typing area --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <ChatDialogBox />;
  }
}

export default class chatBox extends Component {
  constructor() {
    super();
    this.toggleChatBox = this.toggleChatBox.bind(this);
    this.state = {
      chat: true
    };
  }

  toggleChatBox(ev) {
    ev.preventDefault();
    // console.log(ev);
    this.setState({
      chat: false
    });
  }

  render() {
    return <>{renderBox(this.state.chat, this.toggleChatBox)}</>;
  }
}
