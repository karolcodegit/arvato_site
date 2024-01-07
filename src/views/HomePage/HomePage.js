import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Card from '../../components/Card/Card';
import SalesByCountry from '../../components/SalesByCountry/SalesByCountry';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import SalesView from '../../components/SalesView/SalesView';

const card = [
  {title: 'TODAY MONEY', money: '1,234', percent: '5', update: 'since last week', icon: <RiMoneyDollarCircleLine /> },
  {title: 'TODAY MONEY', money: '1,234', percent: '5', update: 'since last week', icon: <RiMoneyDollarCircleLine /> },
  {title: 'TODAY MONEY', money: '1,234', percent: '5', update: 'since last week', icon: <RiMoneyDollarCircleLine /> },
  {title: 'TODAY MONEY', money: '1,234', percent: '5', update: 'since last week', icon: <RiMoneyDollarCircleLine /> }
]

const HomePage = () => {
  return (
    <div className="w-full px-6 py-6 mx-auto h-screen">
        <div className="flex flex-wrap -mx-3">
            {card.map((item) => (
                <Card title={item.title} money={item.money} percent={item.percent} update={item.update} icon={item.icon} />
            ))}
        </div>

        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
            <SalesView />
          </div>
          <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
            <SalesView />
          </div>
        </div>

        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
            <SalesByCountry />
          </div>
          <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
            <Categories />
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default HomePage