import React from 'react'
import { useNavigate } from "react-router-dom";

export default function RoomSymbol(props) {
    
    // Set div style
    const baseDivStyles = "w-40 h-40 flex items-center justify-center border border-black";
    const colorStyle = getBgColorStyle(props.color);
    const divStyle = `${baseDivStyles} ${colorStyle}`;

    const navigate = useNavigate();
    function showRoom() {
        navigate(`/Room/${props.name}/${props.type}`)
    }

    return (
        <div>
            {/* Button */}
            <div onClick={showRoom} className={divStyle} >
                <span className="text-6xl">{props.name}</span>
            </div>
        </div>
    )
}


function getBgColorStyle(color) {
    let bgColorStyle = "bg-white";
    switch (color) {
        case "red":
            bgColorStyle = "bg-red-500";
            break;
        case "blue":
            bgColorStyle = "bg-blue-500"
            break;
        case "amber":
            bgColorStyle = "bg-amber-500"
            break;
        case "green":
            bgColorStyle = "bg-green-500"
            break;
        case "yellow":
            bgColorStyle = "bg-yellow-500"
            break;
        case "cyan":
            bgColorStyle = "bg-cyan-500"
            break;
        case "purple":
            bgColorStyle = "bg-purple-500"
            break;
        case "pink":
            bgColorStyle = "bg-pink-500"
            break;
        case "gray":
            bgColorStyle = "bg-gray-500"
            break;
        case "violet":
            bgColorStyle = "bg-violet-500"
            break;
        default:
            bgColorStyle = "bg-white";
            break;
    }

    return bgColorStyle
}