import '../../../css/home-css/features.css';
import React from 'react';
import Card from './Card';
import Fdata from './featureData';

function Features() {
  return (
    <div>
      <div className="features-main-container | mt-32 flex justify-center items-center flex-col">
        <div className="features-heading | w-[100%] bg-[#5BC0F8]">
          <div className="track ">
            <div className="content | w-[100vw] text-white">
              &nbsp;features&nbsp;&nbsp;&nbsp;&nbsp;
              features&nbsp;&nbsp;&nbsp;&nbsp;
              features&nbsp;&nbsp;&nbsp;&nbsp;
              features&nbsp;&nbsp;&nbsp;&nbsp;
              features&nbsp;&nbsp;&nbsp;&nbsp;features
              &nbsp;&nbsp;&nbsp;&nbsp;features
              &nbsp;&nbsp;&nbsp;&nbsp;features
              &nbsp;&nbsp;&nbsp;&nbsp;features
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div className="features-cards-container | pt-20 flex gap-[1.5rem] flex-col flex-1 overflow-hidden">
          {Fdata.map((val) => (

            <Card
              featureName={val.featureName}
              featuretitle={val.featureTitle}
              featureDesc={val.featureDesc}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
export default Features;
