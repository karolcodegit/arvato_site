import React from "react";
import TopMenu from "./TopMenu";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";




const TopHeader = () => {
  
  return (
    <div className="flex justify-between pl-0 mb-0 w-full">
      <div>
          <Pagination />
      </div>
     
      <div className="flex items-center">
        <div>
          <Search />
        </div>
        <div className="flex">
        <TopMenu />
        </div>
      </div>
      
    </div>
  );
};

export default TopHeader;
