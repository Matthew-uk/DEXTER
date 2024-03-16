import React from "react";
import DexterUsers from "./dexterUsers";
import RatingsContainer from "./ratingsContainer";

const DetailsContainer = () => {
  return (
    <div className="flex flex-row justify-between w-full gap-4">
      <DexterUsers />
      <RatingsContainer />
    </div>
  );
};

export default DetailsContainer;
