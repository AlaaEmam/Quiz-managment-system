import { IoIosAlarm } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/learner/join-quiz');
  };

  return (
    <>
      <button
        className="border-2 rounded-lg py-5 hover:bg-slate-900 hover:text-light_cream"
        onClick={handleButtonClick}
      >
        <div className="flex flex-col justify-center items-center gap-y-2">
          <div>
            <IoIosAlarm className="text-6xl" />
          </div>
          <div>
            <span className="font-semibold text-lg p-10">Join Quiz</span>
          </div>
        </div>
      </button>
    </>
  );
}