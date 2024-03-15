import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${props.backgroundColor} text-[#0D2E48] rounded-full px-8 py-2 font-medium font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-48 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48]`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
