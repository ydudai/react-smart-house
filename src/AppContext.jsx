import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    let pList = getRoomList();
    const [roomList, setRoomList] = useState(pList)
  
    return (
        <AppContext.Provider value={{roomList, setRoomList }}>
            {children}
        </AppContext.Provider>
    )
}


function getRoomList() {
    return (
        [
            {
                "name": "A",
                "type": "Bedroom",
                "color": "red",
                "products": [ 
                    {"id": 1, "name": "Lamp", "isLightOn": "true" },
                    {"id": 1, "name": "Stereo", "isLightOn": "true" },
                ]
            },
            {
                "name": "B",
                "type": "Bathroom",
                "color": "blue",
                "products": [ 
                    {"id": 1, "name": "Electric heater", "isLightOn": "false" },
                ]
           },
            {
                "name": "C",
                "type": "Bathroom",
                "color": "white",
                "products": [ 
                    {"id": 1, "name": "Lamp", "isLightOn": "false" },
                    {"id": 2, "name": "Air conditioner", "isLightOn": "true" },
                    {"id": 3, "name": "Lamp", "isLightOn": "false" },
                ]
            },
            {
                "name": "D",
                "type": "Bathroom",
                "color": "yellow",
                "products": []
           },

        ]
    )
}

function getRoomListOld() {
    return (
        [
            {
                "name": "A",
                "type": "Bedroom",
                "color": "red",
                "products": [ 
                    {"name": "Lamp", "isLightOn": "true" },
                ]
            },
            {
                "name": "B",
                "type": "Bathroom",
                "color": "blue",
                "products": [ 
                    {"name": "Air conditioner", "isLightOn": "false" },
                ]
           },
            {
                "name": "C",
                "type": "Bathroom",
                "color": "white",
                "products": [ 
                    {"name": "Lamp", "isLightOn": "false" },
                    {"name": "Air conditioner", "isLightOn": "true" },
                ]
            },
        ]
    )
}

