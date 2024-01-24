import React from "react";
import Title from "../Title/Title";

const Card = ({bg,title, number, icon}) => {
  return (
    <div className={`${bg} rounded-md py-3 px-2 text-white`}>
      <div className="flex justify-between">
        <div>
          <Title tag="h5">{title}</Title>
          <span className="text-5xl font-bold">{number}</span>
        </div>
        <div>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;