import React from "react";
import UseData from "../../Hooks/UseData";

const ResumeCard = ({ item }) => {
  const { local } = UseData();

  return (
    <>
      <div>
        <div className="flex items-center space-x-2 mb-4 ">
          
          <h4 className="text-5xl dark:text-white font-medium">{item.type}</h4>
        </div>
        <div
          style={{
            background: `${local === "dark" ? "transparent" : item?.bg}`,
          }}
          className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
        >
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item?.date}
          </span>
          <h3 className="text-xl dark:text-white">{item?.title}</h3>
          <p className="dark:text-[#b7b7b7]">{item?.place}</p>
        </div>
        <div
          style={{
            background: `${local === "dark" ? "transparent" : item?.bg1}`,
          }}
          className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
        >
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item?.date1}
          </span>
          <h3 className="text-xl dark:text-white">{item?.title1}</h3>
          <p className="dark:text-[#b7b7b7]">{item?.place1}</p>
        </div>
        <div
          style={{
            background: `${local === "dark" ? "transparent" : item?.bg2}`,
          }}
          className="py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-[#212425] dark:border-2"
        >
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item?.date2}
          </span>
          <h3 className="text-xl dark:text-white">{item?.title2}</h3>
          <p className="dark:text-[#b7b7b7]">{item?.place2}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
