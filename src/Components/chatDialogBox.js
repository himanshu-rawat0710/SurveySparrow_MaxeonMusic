import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const renderChat = (chat) => {
  return chat.map((el) => {
    if (el.index === 0) {
      return (
        <div className="media w-75 mb-3">
          <img
            src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <div className="media-body ml-3">
            <div className="bg-light rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-muted">{el.content}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="media w-75 ml-auto mb-3">
          <div className="media-body">
            <div
              className="rounded py-2 px-3 mb-2"
              style={{ backgroundColor: "#4c5aa1" }}
            >
              <p className="text-small mb-0 text-white">{el.content}</p>
            </div>
          </div>
        </div>
      );
    }
  });
};

const ChatDialogBox = () => {
  const [inputText, setInputText] = useState("");
  const [chat, setChat] = useState([{ index: 0, content: "Ask me anything" }]);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [chat]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // setChat([...chat, {index: 1, content: inputText}]);
    axios
      .get(`https://api.adviceslip.com/advice/search/${inputText}`)
      .then((res) => {
        const botReply =
          res.data.slips === undefined
            ? "I couldn't catch that"
            : res.data.slips[0].advice;
        setChat([
          ...chat,
          { index: 1, content: inputText },
          { index: 0, content: botReply }
        ]);
      })
      .catch((err) => {
        setChat([
          ...chat,
          { index: 1, content: inputText },
          { index: 0, content: "I couldn't catch that" }
        ]);
      });
    setInputText("");
    // console.log(chatBoxRef.current);
  };

  const handleChange = (ev) => {
    setInputText(ev.target.value);
  };

  return (
    <>
      <div
        className="py-5 mx-5"
        style={{
          position: "absolute",
          right: "0",
          bottom: "65px",
          marginRight: "20px",
          maxWidth: "433px"
        }}
      >
        {/* For demo purpose */}

        <div className="row rounded-lg overflow-hidden shadow mr-md-3">
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
                          The team typically replies in few minutes{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Box */}
              <div className="col-12 px-0">
                <div className="px-1 py-5 chat-box bg-white">
                  {renderChat(chat)}
                  <div ref={chatBoxRef}></div>
                </div>

                {/* <!-- Typing area --> */}
                <form action="#" className="bg-light">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Type a message"
                      aria-describedby="button-addon2"
                      onChange={handleChange}
                      className="form-control rounded-0 border-0 py-4 bg-light"
                      value={inputText}
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon2"
                        type="submit"
                        className="btn btn-link"
                        onClick={handleSubmit}
                      >
                        {" "}
                        <img
                          src={require("../Images/send-black-18dp.svg")}
                          alt="Send"
                          data="0"
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatDialogBox;
