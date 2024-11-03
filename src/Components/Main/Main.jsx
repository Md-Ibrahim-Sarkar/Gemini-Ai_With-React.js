import { useContext } from "react";
import { assets } from "../../assets/assets";
import { IoMdArrowDropdown } from 'react-icons/io';
import { Context } from "../../Context/Context";





function Main() {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className="w-full max-[640px]:px-4 max-[640px]:relative ">
      <div className="flex justify-between w-full items-center p-4">
        <div className="flex items-center cursor-pointer hover:bg-slate-400 py-2 ps-2 pe-1 rounded-2xl transform transition-all ease-linear duration-200">
          <h2 className="text-3xl font-semibold ">Gemini</h2>
          <IoMdArrowDropdown className="text-3xl" />
        </div>
        <a target="_blank" href="https://ibrahimsarkar.com/">
          <img
            className="w-[55px] rounded-full cursor-pointer  transform transition-all ease-linear duration-200 hover:bg-slate-600 "
            src={assets.myImage}
            alt=""
          />
        </a>
      </div>
      <div className=" max-w-[900px] max-[640px]:mb-32 mx-auto xl:mt-14 lg:mt-4">

        {!showResult ?
          <>
            <div className="">
              <h1 className="text-6xl max-[640px]:text-4xl max-[640px]:text-center">
                <span className="head-text max-[640px]:">Hello, There!</span>
              </h1>
              <p className="text-5xl max-[640px]:text-4xl max-[640px]:text-center">
                How Can I help you today?
              </p>
            </div>
            <div className="grid grid-cols-4 mt-4 gap-4 max-[640px]:grid-cols-1">
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
              <div className="bg-[#F0F4F9] p-3 max-[640px]:h-[100px] h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
                <p className="">Briefly summarize this concept: urban planning</p>
                <img className="w-[25px] ms-auto" src={assets.bulb_icon} alt="" />
              </div>
              <div className="bg-[#F0F4F9] p-3 max-[640px]:h-[100px] h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
                <p className="">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  className="w-[25px] ms-auto"
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="bg-[#F0F4F9] p-3 max-[640px]:h-[100px] h-[200px] inline-flex flex-col  justify-between rounded-xl hover:bg-slate-400 transform transition-all ease-linear duration-300 cursor-pointer">
                <p className="">Tell me about React js and React native</p>
                <img className="w-[25px] ms-auto" src={assets.code_icon} alt="" />
              </div>
            </div>
          </> :
          <div className="">
            <div className=" py-0 px-[5%] max-h-[70vh] overflow-y-scroll  overflow-hidden">
              <div className="flex items-center gap-4 mb-5">
                <img className="w-[40px] rounded-full" src={assets.myImage} alt="" />
                <p dangerouslySetInnerHTML={{ __html: recentPrompt }}></p>
              </div>

              <div className="flex ">
                <div className="w-[7%]">
                  <img className="w-[40px] rounded-full" src={assets.gemini_icon} alt="" />
                </div>
                <div className="w-[91%]">
                  {loading ?
                    <div className="w-full flex flex-col gap-3 loader">
                      <hr className="rounded border-none bg-[#f6f7f8]" />
                      <hr className="rounded border-none bg-[#f6f7f8]" />
                      <hr className="rounded border-none bg-[#f6f7f8]" />
                    </div> :

                    <p className="mb-24 text-lg font-light leading-7" dangerouslySetInnerHTML={{ __html: resultData }}></p>

                  }
                </div>
              </div>

            </div>
          </div>
        }


      </div>
      <div className="w-full flex justify-center mt-4 ">
        <div className="absolute md:bottom-0 w-full max-w-[900px] px-5  max-[640px]:px-2 ">
          <div className="">
            <div className="flex justify-between items-center gap-5 p-4 bg-[#d7e6f8] rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
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
                {input ? <img
                  onClick={() => onSent()}
                  className="w-6 cursor-pointer max-[640px]:me-8"
                  src={assets.send_icon}
                  alt=""
                /> : null}
              </div>
            </div>
            <div className="flex justify-center ">
              <p className="text-xs my-2 text-center">
                React + Gemini API by {' '}
                <a
                  target="_blank"
                  className="font-semibold hover:underline"
                  href="https://ibrahimsarkar.com/"
                >
                  Ibrahim Sarkar:
                </a>{' '}
                Creating an AI Chat Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main