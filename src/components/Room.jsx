import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import RoomProducts from './RoomProducts';
import ProductSelector from './ProductSelector';

export default function Room() {
    const baseDivStyles = "w-40 h-40 flex items-center justify-center border border-black";
    const { roomName, roomType } = useParams();
    const [isProductSelectorVisible, setProductSelectorVisible] = useState(false);

    return (
        <>
            <RoomProducts roomName={roomName} roomType={roomType} isProductSelectorVisible={isProductSelectorVisible} setProductSelectorVisible={setProductSelectorVisible} ></RoomProducts>
            {isProductSelectorVisible && <ProductSelector roomName={roomName} roomType={roomType} setProductSelectorVisible={setProductSelectorVisible}></ProductSelector>}
         </>
    )
}
