import React from "react";
import Rating from "./rating";
import Profile1 from "@/assets/profile1.jpeg";
import Profile2 from "@/assets/profile2.jpeg";
import Profile3 from "@/assets/Profile3.jpeg";

const Vendors = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-white px-4 py-4 rounded-md shadow-lg">
      <h2>Top Rated Vendors</h2>
      <div className="flex flex-col gap-2 mt-4">
        <Rating img={Profile1} name="Esosa Bolaji" job="Electrician" />
        <Rating img={Profile2} name="Efik Ayo" job="Carpenter" />
        <Rating img={Profile3} name="Victor Siji" job="Makeup Artiste" />
        <Rating img={Profile1} name="Tolani Chelsea" job="House Cleaner" />
        <Rating img={Profile2} name="Amala Moon" job="Restaurant" />
      </div>
    </div>
  );
};

export default Vendors;
