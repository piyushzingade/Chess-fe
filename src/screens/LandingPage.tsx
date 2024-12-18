import { useNavigate } from "react-router-dom";
import {Button} from "../components/Button";


export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-[#302e2b] h-screen w-screen flex px-10 py-10">
      <div className=" ">
        <img src={"/image.png"} className=" w-[560px] px-10 py-10" />
      </div>
      <div className="">
        <div className="">
          <h1 className="text-5xl font-bold text-white px-10 py-10">
            Play Chess on Online No.1 Platform
          </h1>
          <div className=" flex mt-5 justify-center space-x-10">
            <h1 className="text-white text-lg flex gap-3">
              10,20,52,345
              <p className="text-gray-500 ">Games Today</p>
            </h1>
            <h1 className="text-white text-lg flex gap-3">
              121,198 <p className="text-gray-500">Playing Now</p>
            </h1>
          </div>
        </div>
        <div className="">
          <div className="mt-10 flex justify-center">
            <Button
              onClick={() => {
                navigate("/game");
              }}
              className="bg-[#81b64c] text-white rounded-lg px-32 py-8 text-2xl font-bold flex justify-center items-center border-b hover:bg-green-800 "
            >
              Play Online
            </Button>
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              onClick={() => {
                // navigate("/");
              }}
              className="bg-[#454341] text-[#c5c5c5] rounded-lg px-32 py-8 text-2xl font-bold flex justify-center items-center  border-b"
            >
              Play Bots
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
