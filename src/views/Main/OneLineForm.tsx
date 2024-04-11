import React from "react";

const OneLineForm: React.FC = () => {
  return (
    <form className="w-full relative max-w-[40rem]">
      <input
        className="border border-[#434141] px-6 py-4 w-full"
        type="text"
        placeholder="Enter your email"
      />
      <button
        className="absolute right-0 top-0 bg-[#717171] px-8 py-4 text-white text-[17px] outline-none"
        type="submit"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default OneLineForm;
