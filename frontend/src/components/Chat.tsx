import { useState } from "react";

interface Message {
  isUser: boolean;
  message: string;
  time: number;
}
const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const handleClick = () => {
    if (!userMessage) return;
    const m: Message = {
      isUser: false,
      message: userMessage,
      time: Date.now(),
    };
    setMessages((prev) => [...prev, m]);
  };
  return (
    <div className="w-full h-[80vh] ">
      <div className="w-full h-full flex flex-col-reverse px-20 py-5">
        {messages.map((message) => (
          <div
            className={`w-full flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div className=" bg-gray-600 w-1/2 m-2 p-2 rounded-lg">
              {message.message}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 w-3/4 h-11 flex justify-center items-center">
        <div className="  w-1/2 h-10 flex z-10">
          <textarea
            className="border-none bg-slate-500 w-3/4 h-full text-white focus:outline-0  z-10 p-4 rounded-md"
            placeholder="Likh fer ....."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="ml-2 p-2 h-full w-35 rounded-xl bg-slate-500 shadow hover:bg-slate-400  font-semibold transition-all ease-in-out  z-10"
          >
            Bhejo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
