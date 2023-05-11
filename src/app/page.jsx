'use client'
import React, { useState } from "react";
import Image from "next/image";

import style from "./page.module.css";
import Map from "../../public/Screenshot 2023-05-09 153130.png"//"../../public/815670.jpg"

import Popup1 from "../../popups/1";
import Popup2 from "../../popups/2";
import Popup3 from "../../popups/3";



const Home = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleAreaClick = (areaId) => {
    setActivePopup(areaId);
  };

  return (
    <div className={style.yes}>
      <map name="image-map">
        <Image
          src={Map}
          alt="Picture of the author"
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
          className={style.map}
          useMap="#image-map"
        />
        <area
          shape="rect"
          coords="50,50,1000,1000"
          onClick={() => handleAreaClick("area1")}
        />
        <area
          shape="rect"
          coords="200,50,300,150"
          onClick={() => handleAreaClick("area2")}
        />
        <area
          shape="rect"
          coords="100,200,200,300"
          onClick={() => handleAreaClick("area3")}
        />
      </map>
      {activePopup === "area1" && <Popup1 />}
      {activePopup === "area2" && <Popup2 />}
      {activePopup === "area3" && <Popup3 />}
    </div>
  );
};

export default Home;
