import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../AppContext.jsx'

export default function AddRoom() {
    const inputContainerStyle = "w-full max-w-xl mx-auto mb-6 border border-green-600 flex";
    const inputStyle = "w-full p-4 text-3xl";
    const defValue = "Bedroom"

    const { roomList, setRoomList } = useContext(AppContext);
    const [name, setName] = useState("");
    const [color, setColor] = useState("")
    const [roomType, setRoomType] = useState("")
    const navigate = useNavigate();
    
    function createRoom() {
        let newRoom = {
            "name": name,
            "type": roomType,
            "color": color
        }
        setRoomList([...roomList, newRoom])
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center p-6 max-w-2xl mx-auto">

            {/* Title */}
            <h1 className="text-5xl font-bold mb-10">Smart house</h1>
            <div className={inputContainerStyle}>
                <select name="roomtype" id="roomtype" defaultValue={defValue} onChange={e => setRoomType(e.target.value)}>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Bathroom">Bathroom / Toilet</option>
                    <option value="kitchen">kitchen</option>
                </select>
            </div>
            <div className={inputContainerStyle}>
                <input className="gap-6" type="text" placeholder='name' onChange={e => setName(e.target.value)}></input>
            </div>
            <div className={inputContainerStyle}>
                <input type="text" placeholder='color' onChange={e => setColor(e.target.value)}></input>
            </div>
            <div className="w-48 h-16 bg-blue-500 flex items-center justify-center mt-6">
                <button onClick={createRoom} className="text-blue-700 font-bold text-3xl">Create</button>
            </div>
        </div>
    )
}
