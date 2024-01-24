import React from "react";
import Title from "../Common/Title/Title";
import Paragraph from "../Common/Paragraph/Paragraph";
import Button from "../Button/Button";

import BoySitting from '../../assets/images/iStock-1422777472.jpg'
import Box from "../Box/Box";


const CardUpdate = () => {
  return (
    <Box className="bg-slate-200 rounded-3xl">
      <div className="flex flex-col md:flex-row items-center p-8">
        <div className="w-32 md:w-48 h-32 md:h-48">
          <img
            className="rounded-lg object-cover h-full w-full"
            src={BoySitting}
            alt="img"
          />
        </div>
        <div className="ml-8 flex flex-col justify-between">
          <div>
            <span className="text-indigo-700 text-sm">VERSION 1.4</span>
            <Title tag="h6" >New update availabe!</Title>
          </div>
          <div>
            <Paragraph textSize='font-xl' className="mt-2">
              There is a new update available. Click here to see what's new!
            </Paragraph>
          </div>
          <div className="my-3">
            <Button>
              See what's new
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CardUpdate;
