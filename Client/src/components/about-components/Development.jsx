import React from "react";
import '../../css/about-css/dev.css'
import pc from '../../images/pc.svg'
import Sline from "../svg-componets/Sline";

function Development() {
    return (
        <div className="devStageContainer | max-width-container flex justify-center mt-20">
            <div className="pc-container | relative">
                <img src={pc} alt="" className="relative" />
                <div className="devContent | absolute top-[10%] w-[80%] right-[10%]">
                    <h1 className="underline text-lg">Development Stage</h1>
                    <p className="font-[poppins] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="sline | hidden absolute top-[80%] left-[10%] w-[20px]"><Sline /></div>
            </div>
        </div>
    )
}

export default Development;