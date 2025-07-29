import React from "react";

const Input = ({label,type,value, id}) => {
  return (
    <div className="w-1/2">
        <label htmlFor={id} className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%]  font-semibold "><h3>{label}</h3></label>
      <input
        type={type}
        id={id}
        placeholder={value}
        className="w-full mt-4 text-sm text-[#252525] placeholder-opacity-50 py-4.5 px-5 rounded-[12px] border border-[#2525251A]"
      />
    </div>
  );
};

export default Input;