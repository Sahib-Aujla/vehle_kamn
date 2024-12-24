const Chat = () => {
  return (
    <div className="w-full h-full">
      <div className="ml-20 w-full flex ">
        <div className=" absolute bottom-4 w-1/2 h-10 flex">
          <input
            className="border-none bg-slate-500 w-1/3 h-full text-white  z-3"
            placeholder="Likh fer ....."
            type="text"
          />
          <button className="pl-8 h-full w-30 border-red-300 shadow hover:shadow-lg  z-3">
            Bhejo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
