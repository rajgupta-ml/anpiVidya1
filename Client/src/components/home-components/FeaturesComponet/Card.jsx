/* eslint-disable react/prop-types */
import React from 'react';

import '../../../css/home-css/features.css';

function Card({ featureName, featuretitle, featureDesc }) {
  return (
    <div>
      <div className="card | border-8 border-white rounded-xl w-[276px] text-white">
        <div className="card-title | text-black p-2 px-4 border-b-8 border-white text-2xl bg-[#FFC100]">
          <div className="h1">{featureName}</div>
        </div>

        <div className="card-content | pb-6 p-2 px-4  bg-[#55B2E7] ">
          <div className="card-heading | text-[2rem] underline text-white z-10">
            <h2>{featuretitle}</h2>
          </div>
          <div className="card-para | text-xl">
            {featureDesc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
