import { useEffect, useState } from "react";
const SplashScreen = () => {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={`absolute w-full h-full z-90  bg-gradient-to-r from-black to-blue-950 ${
        isHidden ? "hidden" : ""
      }`}
    >
      <video
        className="w-[100vw] h-[100vh]"
        src="/splash_vid.mp4"
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default SplashScreen;
