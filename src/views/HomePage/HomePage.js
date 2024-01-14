import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Card from "../../components/Card/Card";
import SalesByCountry from "../../components/SalesByCountry/SalesByCountry";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Layout/Footer/Footer";
import SalesView from "../../components/SalesView/SalesView";
import Title from "../../components/Common/Title/Title";
import { UpdateIcon } from "../../components/Common/Icons/Icons";

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
        <div className="flex flex-wrap w-full ">
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
        </div>
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
