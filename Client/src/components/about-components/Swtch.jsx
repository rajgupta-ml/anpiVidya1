import React from 'react'
import '../../css/about-css/team.css'

function Swtch(props) {
    return (
        <div>
            <div className="switch | relative z-10 border-2 border-black w-[266px] h-[98px] bg-[#FFC100] flex items-center justify-center text-3xl text-white">{props.name}</div>
        </div>
    )
}

export default Swtch
