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
import CardUpdate from "../../components/CardUpdate/CardUpdate";
import Inbox from "../../components/Common/Inbox/Inbox";
import EventCard from "../../components/Common/CardEvent/CardEvent";

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
          <Title tag="h2" white>
            Dashboard
          </Title>
          {/* <span className='font-light'>Welcome Karol </span> */}
        </div>
        <div className="flex items-center">
          <UpdateIcon className="cursor-pointer" />
          <p className="mx-3">{`Today: ${displayDate()}`}</p>
        </div>
      </div>
      <div className="border border-blue-gray-500 w-full my-5 "></div>

      <div className="flex flex-col md:flex-row">
        <div></div>
      </div>

      <div className="flex flex-col xl:flex-row w-full gap-6">
        <div className="xl:w-2/5">
          <CardUpdate />
        </div>
        <div className="xl:w-2/5">
          <Inbox />
        </div>
        <div className="xl:w-1/8">
          <EventCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
