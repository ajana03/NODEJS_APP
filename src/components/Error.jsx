import { MdOutlineErrorOutline } from "react-icons/md";

import { useDispatch } from "react-redux";
import { removeError } from "../store/configSlice";

const Error = ({ errorMsg }) => {
  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch(removeError());
  };
  return (
    <div className="text-white bg-red-700 py-[8px] px-[20px] min-w-[220px] absolute right-0 -top-5 border-l-8 border-red-950 rounded-md flex items-center justify-start">
      <span className=" mr-4">
        <MdOutlineErrorOutline color="white" size={25} />
      </span>
      <span className="mr-4 text-md font-semibold">{errorMsg}</span>
      <span
        onClick={handleClearError}
        className="text-2xl cursor-pointer hover:text-gray-500"
      >
        &times;
      </span>
    </div>
  );
};

export default Error;
