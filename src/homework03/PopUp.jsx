import { IoIosClose } from "react-icons/io";

const PopUp = ({ setMsg, msg, on, setOn, isMsg, setIsMsg }) => {
  return (
    <div className={isMsg ? "popup on" : "popup"}>
      <div className="box">
        <p>{msg}</p>
        <span onClick={() => setIsMsg(false)}>
          <IoIosClose />
        </span>
      </div>
    </div>
  );
};

export default PopUp;
