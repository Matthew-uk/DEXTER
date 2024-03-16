import React from "react";
import Vendors from "./vendorrating";
import UsersRating from "./usersRating";

const RatingsContainer = () => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Vendors />
      <UsersRating />
    </div>
  );
};

export default RatingsContainer;
