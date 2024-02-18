import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10) + " Jai Hind🚩",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
                name: "Deepak Naidu",
                message: liveMessage,
            })
        );
        setLiveMessage("");
        }}>
        <input className="w-[75%] border border-black px-2" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="px-2 py-1 mx-2 bg-blue-700 rounded-lg text-white hover:bg-blue-600">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
