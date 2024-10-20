import { assets } from "../../assets/assets";
import { IoMdArrowDropdown } from 'react-icons/io';





function Main() {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full items-center p-4">
        <div className="flex items-center cursor-pointer hover:bg-slate-400 py-2 ps-2 pe-1 rounded-2xl transform transition-all ease-linear duration-200">
          <h2 className="text-3xl font-semibold ">Gemini</h2>
          <IoMdArrowDropdown className="text-3xl" />
        </div>
        <a target="_blank" href="https://ibrahimsarkar.com/">
          <img
            className="w-[60px] rounded-full cursor-pointer p-[2px] transform transition-all ease-linear duration-200 hover:bg-slate-600 "
            src={assets.myImage}
            alt=""
          />
        </a>
      </div>
      <div className=" max-w-[900px] mx-auto xl:mt-14 lg:mt-4">
        <div className="">
          <h1 className="text-6xl">
            <span className="head-text">Hello, There!</span>
          </h1>
          <p className="text-5xl">How Can I help you today?</p>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4 ">
          <div className="bg-[#F0F4F9] p-3 inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
            <p className="">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className="w-[25px] ms-auto"
              src={assets.compass_icon}
              alt=""
            />
          </div>
          <div className="bg-[#F0F4F9] p-3 h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
            <p className="">Briefly summarize this concept: urban planning</p>
            <img className="w-[25px] ms-auto" src={assets.bulb_icon} alt="" />
          </div>
          <div className="bg-[#F0F4F9] p-3 h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
            <p className="">
              Brainstorm team bonding activities for our work retreat
            </p>
            <img
              className="w-[25px] ms-auto"
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="bg-[#F0F4F9] p-3 h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
            <p className="">Tell me about React js and React native</p>
            <img className="w-[25px] ms-auto" src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="absolute  bottom-0 w-full max-w-[900px] px-5 ">
          <div className="">
            <div className="flex justify-between items-center gap-5 p-4 bg-[#d7e6f8] rounded-full">
              <input
                className="bg-transparent w-full outline-none "
                type="text"
                placeholder="Enter a prompt here..."
              />
              <div className="flex gap-3 pe-3 ">
                <img
                  className="w-6 cursor-pointer"
                  src={assets.gallery_icon}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={assets.mic_icon}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-xs my-2">
                Using Google Gemini API with React JS.{' '}
                <a
                  target="_blank"
                  className="font-semibold hover:underline"
                  href="https://ibrahimsarkar.com/"
                >
                  Ibrahim Sarkar
                </a>{' '}
                is developed it is an Ai web, like Google Gemini or ChatGPT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main