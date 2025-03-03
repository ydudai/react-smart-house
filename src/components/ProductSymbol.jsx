import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function ProductSymbol(props) {
    // Set div style
    const baseDivStyles = "w-20 h-10 flex items-center justify-center border border-black";
    const colorStyle = getBgColorStyle(props.color);
    const divStyle = `${baseDivStyles} ${colorStyle}`;
    const id = props.id
    const roomName = props.roomName
    const productName = props.name
    const { roomList, setRoomList } = useContext(AppContext);

    function updateProductLight() {
        let isLightOn = "false";
        if (props.color === "true") {
            isLightOn = "false"
        } else if (props.color === "false") {
            isLightOn = "true"
        }

        let updatedProduct = {
            id: id, "name": productName, "isLightOn": isLightOn
        }
        updateProductOfRoom(roomList, setRoomList, roomName, id, productName, updatedProduct)
    }

    return (
        <span>
            {/* Button */}
            <button onClick={updateProductLight} className={divStyle}>{props.name}</button><br></br>
        </span>
    )
}


const updateProductOfRoom = (roomList, setRoomList, roomName, id, productName, updatedProduct) => {
    // Create a new array by mapping through the existing roomList
    const updatedRoomList = roomList.map(room => {
        // If this is the room we want to update
        if (room.name === roomName) {
            return {
                ...room,
                products: room.products.map(product => {
                    // If this is the product we want to replace
                    if (product.name === productName && product.id === id) {
                        // Return the updated product
                        return updatedProduct;
                    }
                    // Otherwise return the original product
                    return product;
                })
            };

        }
        // Otherwise return the room unchanged
        return room;
    });

    // Update the state with the new array
    setRoomList(updatedRoomList);
};


function getBgColorStyle(isLightOn) {
    let bgColorStyle = "bg-red-500";
    switch (isLightOn) {
        case "false":
            bgColorStyle = "bg-red-500";
            break;
        case "true":
            bgColorStyle = "bg-green-500"
            break;
        default:
            bgColorStyle = "bg-red-500";
            break;
    }
    return bgColorStyle
}

