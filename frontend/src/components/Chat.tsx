const Chat = () => {
  return (
    <div className="w-full h-[80vh] ">
      <div className="w-full h-full flex justify-center items-center">
        <div>Messagess</div>
      </div>
      <div className="absolute bottom-8 w-3/4 h-11 flex justify-center items-center">
        <div className="  w-1/2 h-10 flex z-10">
          <input
            className="border-none bg-slate-500 w-3/4 h-full text-white focus:outline-0  z-10 p-4 rounded-md"
            placeholder="Likh fer ....."
            type="text"
          />
          <button className="ml-2 p-2 h-full w-35 rounded-xl bg-slate-500 shadow hover:bg-slate-400  font-semibold transition-all ease-in-out  z-10">
            Bhejo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
