import { Line } from 'rc-progress';
import React from 'react';
import UseData from '../../Hooks/UseData';

const LineItem = ({item}) => {
  const {local} = UseData()
    return (
        <div className=" mb-7">
        <div className="flex justify-between py-1">
          <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            {item?.name}
          </span>
          <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            {item?.number}%
          </span>
        </div>

        <Line
          percent={item?.number}
          strokeWidth={1}
          trailWidth={1}
          trailColor={`${local === "dark" ? "#1C1C1C" : "#EDF2F2"}`}
          strokeColor={item?.color}
        />
      </div>
    );
};

export default LineItem;