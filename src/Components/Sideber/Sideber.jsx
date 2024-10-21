import { useState } from "react";
import { assets } from "../../assets/assets";

function Sidebar() { // Corrected name

  const [extended, setExtended] = useState(false);

  return (
    <div className="p-[20px] bg-[#DFE0E1] inline-flex flex-col max-[640px]:hidden justify-between">
      <div>
        <div
          onClick={() => {
            setExtended(prev => !prev);
          }}
          className="cursor-pointer p-3 "
        >
          <img className="w-[20px]" src={assets.menu_icon} alt="Menu" />
        </div>
        <div className="flex p-3 items-center mt-9 bg-[#DCFCE7] rounded-full cursor-pointer hover:bg-[#bbefcd] transform transition-all ease-linear duration-200">
          <img
            className="w-[20px] rounded-full"
            src={assets.plus_icon}
            alt="New Chat"
          />
          {extended && <p className="ms-3">New Chat</p>}
        </div>
        <div className="mt-5">
          {extended && (
            <>
              <p>Recent</p>
              <div className="flex gap-3 mt-3 hover:bg-slate-300 p-3 rounded-full cursor-pointer transform transition-all ease-linear duration-200">
                <img
                  className="w-[25px] h-[25px]"
                  src={assets.message_icon}
                  alt="Message"
                />
                <p>What is React.js?</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="transform transition-all duration-500">
        <div className="flex gap-4 hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200 cursor-pointer">
          <img
            className="w-[20px] h-[20px]"
            src={assets.question_icon}
            alt="Help"
          />
          {extended && <p>Help</p>}
        </div>
        <div className="flex gap-4  hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200 cursor-pointer">
          <img
            className="w-[20px] h-[20px]"
            src={assets.history_icon}
            alt="Activity History"
          />
          {extended && <p>Activity</p>}
        </div>
        <div className="flex gap-4 hover:bg-slate-300 p-2 rounded-full transform transition-all ease-linear duration-200">
          <img
            className="w-[20px] h-[20px]"
            src={assets.setting_icon}
            alt="Settings"
          />
          {extended && <p>Settings</p>}
        </div>
        {extended && (
          <ul className="p-4 text-xs list-disc">
            <li key="location">Dhaka, Bangladesh</li>
            <p className="text-cyan-500">
              From your IP address • Update location
            </p>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar; // Corrected name
