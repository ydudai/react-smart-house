import React, { useContext } from 'react'

import RoomSymbol from './RoomSymbol';
import { useNavigate } from "react-router-dom";
import { AppContext  } from '../AppContext.jsx'

export default function Home() {

    const {roomList} = useContext(AppContext);

    //programmatic navigation
    const navigate = useNavigate();
    const addRoom = () => {
        navigate('/AddRoom');
    };

    return (
        <div className="border border-blue-300 p-8 max-w-3xl mx-auto flex flex-col items-center gap-16">

            {/* Title */}
            <h1 className="text-5xl font-normal">Smart house</h1>

            {/* Control Buttons Row */}
            <div className="flex justify-center gap-4 w-full">
                {roomList.map((element, index) => {
                    return <RoomSymbol key={index} type={element.type} name={element.name} color={element.color} />
                })}
            </div>

            {/* Add Button (Blue Oval) */}
            <div onClick={addRoom} className="w-64 h-48 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-6xl font-bold">+</span>
            </div>
        </div>
    )
}
