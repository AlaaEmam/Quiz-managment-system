import React from 'react';
import character from '../../../assets/empty.svg';

export default function NoData() {
  return (
    <div className="flex justify-center items-center h-full min-h-[300px]">
      <div className="text-center">
        <div>
          {/* Center the image */}
          <img
            src={character}
            alt="No data"
            className="mx-auto mb-4 max-w-xs"
          />
        </div>
        <div>
          <h3 className="m-2 font-medium">No Data!</h3>
          <p className="font-light">No items available at the moment. Please come back later!</p>
        </div>
      </div>
    </div>
  );
}
