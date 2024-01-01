import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import img from "../assets/sciastra.webp";
import img2 from "../assets/download.png";
import questions from "../Utils/Questions";

const Chat = () => {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    responses: [],
  });
  const chatRef = useRef(null);

  useEffect(() => {
    askQuestion();
  }, [questionIndex]);

  useEffect(() => {
    if (chatRef.current && chatRef.current.scrollHeight) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const askQuestion = () => {
    if (questionIndex < questions.length) {
      const currentQuestion = questions[questionIndex];
      setMessages([
        ...messages,
        {
          text: currentQuestion.text,
          sender: "bot",
          options: currentQuestion.options,
          input: currentQuestion.input,
        },
      ]);
    } else {
      setMessages([
        ...messages,
        {
          text: `Thanks for contacting us ${userData.name}! We'll contact you shortly.`,
          sender: "bot",
        },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitResponse();
    }
  };

  const submitResponse = () => {
    const userInput =
      questionIndex === 0 ? userData.name : userData.phoneNumber;
    handleUserInput(userInput);
  };

  const handleUserInput = (userInput) => {
    setMessages([
      ...messages,
      { text: `Your response: ${userInput}`, sender: "user" },
    ]);

    switch (questionIndex) {
      case 0:
        setUserData({ ...userData, name: userInput });
        break;
      case 1:
        setUserData({ ...userData, phoneNumber: userInput });
        break;
      default:
        setUserData({
          ...userData,
          responses: [
            ...userData.responses,
            {
              question: questions[questionIndex].text,
              response: userInput,
            },
          ],
        });
        break;
    }

    setQuestionIndex(questionIndex + 1);
  };

  const toggleChatbot = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setQuestionIndex(0);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isActive ? (
        <div
          className="border rounded p-4 max-w-96 overflow-auto h-[70vh] "
          ref={chatRef}
        >
          <div className="mb-2 top-0 left-0 bg-gradient-to-r from-[#234eb0] to-[#b656e2] text-white rounded-md p-4 flex items-center justify-center ">
            <img src={img} alt="" className="w-12" />
            SciAstra ChatBot
          </div>

          <div
            className={` absolute bottom-0 -left-1 z-10 text-red-500  ${
              isActive ? "" : ""
            }`}
            onClick={() => {
              setIsActive(false);
            }}
          >
            <AiOutlineCloseCircle style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="flex flex-col space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 text-white ${
                  msg.sender === "user" ? "bg-[#b656e2]" : "bg-[#234eb0] "
                } rounded`}
              >
                <span className="flex items-center justify-center">
                  {msg.sender === "user" ? (
                    <img src={img2} alt="" className="w-10 rounded-full mr-2" />
                  ) : (
                    <img src={img} alt="" className="w-10 rounded-full mr-2" />
                  )}
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          {messages.length > 0 &&
            messages[messages.length - 1].input === "text" && (
              <div className="mt-4 flex items-center mx-2 justify-between mb-4">
                <input
                  type={questionIndex === 0 ? "text" : "tel"}
                  placeholder={
                    questionIndex === 0
                      ? "Enter your name"
                      : "Enter your phone number"
                  }
                  value={
                    questionIndex === 0 ? userData.name : userData.phoneNumber
                  }
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [questionIndex === 0 ? "name" : "phoneNumber"]: e.target
                        .value,
                    })
                  }
                  onKeyDown={handleKeyPress}
                  className="p-2 border rounded"
                />
                <button
                  className=" p-2 bg-gradient-to-r from-[#234eb0] to-[#b656e2] text-black hover:bg-gray-300 rounded"
                  onClick={() =>
                    handleUserInput(
                      questionIndex === 0 ? userData.name : userData.phoneNumber
                    )
                  }
                >
                  Submit
                </button>
              </div>
            )}

          {messages.length > 0 && messages[messages.length - 1].options && (
            <div className="mt-4">
              {messages[messages.length - 1].options.map((option, index) => (
                <button
                  key={index}
                  className=" m-3 p-2 bg-[#a3bdf8] text-black hover:bg-gray-300 rounded"
                  onClick={() => handleUserInput(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className="rounded-full bg-[#234eb0] p-2 cursor-pointer"
          onClick={toggleChatbot}
        >
          <span className="text-white">
            <img src={img} alt="" className="w-10" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Chat;
