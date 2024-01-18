import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Card from "../../components/Card/Card";
import SalesByCountry from "../../components/SalesByCountry/SalesByCountry";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Layout/Footer/Footer";
import SalesView from "../../components/SalesView/SalesView";
import Title from "../../components/Common/Title/Title";
import { UpdateIcon } from "../../components/Common/Icons/Icons";
import { FcCamcorderPro } from "react-icons/fc";
import { FaArrowDown } from "react-icons/fa6";
import Paragraph from "../../components/Common/Paragraph/Paragraph";



const card = [
  {
    title: "Backlog inbound",
    number: "10 063",
    percent: "14",
    update: "today",
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    title: "Backlog outbound",
    number: "23 234",
    percent: "-4",
    update: "today",
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    title: "New orders",
    number: "519",
    percent: "-5",
    update: "since last week",
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    title: "Shipped orders",
    number: "160 951",
    percent: "5",
    update: "since last week",
    icon: <RiMoneyDollarCircleLine />,
  },
];

const displayDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${day} ${month}`;
};

const HomePage = () => {
  return (
    <div className="text-white transition-all p-8 flex-1 ">
      <div className="flex flex-wrap w-full justify-between">
        <div>
          <Title tag="h2">Dashboard</Title>
          {/* <span className='font-light'>Welcome Karol </span> */}
        </div>
        <div className="flex items-center">
          <UpdateIcon className="cursor-pointer" />
          <p className="mx-3">{`Today: ${displayDate()}`}</p>
        </div>
      </div>
      <div className="border border-blue-gray-500 w-full my-5 "></div>

      <div className="w-full grow-0 basis-full">
        <div className="flex my-10 box">
          {card.map((item) => (
            
            <div className="basis-1/4 grow-0 max-w-[25%] mr-7">
            <div className="bg-white text-gray-800 transition-shadow rounded-xl overflow-hidden pt-7 px-7 pb-14">
                <div className="flex items-center">
                  <div className="flex relative items-center justify-center shrink-0 leading-4 rounded-full overflow-hidden text-sm font-bold w-12 h-12 bg-cyan-950">
                    <FcCamcorderPro className="w-6 h-6"/>
                  </div>
                  <div className="ml-4 text-gray-500 font-bold">{item.title}</div>
                </div>
                <div className="flex items-center justify-center pt-4 pb-5">
                    <FaArrowDown className='text-red-600 w-6 h-6'/>
                    <Title tag="h1" >{item.number}</Title>
                </div>
                <div className="text-sm text-gray-600 text-center ">
                    <Paragraph>{item.percent}</Paragraph>
                </div>
            </div>
        </div>
          ))}

          
         
        </div>
      </div>


        {/* <div className="flex flex-wrap w-full ">
          <div className="grid grid-cols-2 gap-3 ">
            {card.map((item) => (
              <Card
                title={item.title}
                number={item.number}
                percent={item.percent}
                update={item.update}
                icon={item.icon}
              />
            ))}
          </div>
          <div>

          </div>
        </div> */}
        <Footer />
    </div>
    // <div>

    //   <div className="flex flex-wrap mt-6 -mx-3">
    //     <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
    //       <SalesView />
    //     </div>
    //     <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
    //       <SalesView />
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap mt-6 -mx-3">
    //     <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
    //       <SalesByCountry />
    //     </div>
    //     <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
    //       <Categories />
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default HomePage;
