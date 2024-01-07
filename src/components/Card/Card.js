import React from "react";

const Card = ({ title, money, percent, update, icon }) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal uppercase dark:text-white dark:opacity-60 text-sm">
                  {title}
                </p>
                <h5 className="mb-2 font-bold dark:text-white">{money}zł</h5>
                <p className="mb-0 dark:text-white dark:opacity-60">
                  <span className="font-bold leading-normal text-sm text-emerald-500">
                    +{percent}%
                  </span>
                  {update}
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center text-white rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500 text-5xl">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
