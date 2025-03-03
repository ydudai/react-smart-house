import React, { useContext } from 'react'
//import ProductSelector from './ProductSelector';
import { AppContext } from '../AppContext.jsx'
import ProductSymbol from './ProductSymbol.jsx'

export default function RoomProducts(props) {
    const baseDivStyles = "w-40 h-40 flex items-center justify-center border border-black";
    const { roomList, setRoomList } = useContext(AppContext);
    const setProductSelectorVisible = props.setProductSelectorVisible;

    function addProduct() {
        setProductSelectorVisible(true);
    }

    return (
        <div className="border border-blue-300 p-4 max-w-3xl mx-auto flex flex-col items-start gap-4">
            {/* Title */}
            <h1 className="text-5xl font-normal">Smart house</h1>
            <h3>Room Name: {props.roomName}</h3>
            <h3>Room Type: {props.roomType}</h3>

            {/* Control products in room */}
            <h3>Products: </h3>
            <div className="flex-col justify-items-start gap-4 w-full">
                {(roomList.find(room => room.name === props.roomName)?.products || []).map((product, index) => (
                    <ProductSymbol
                        key={index}
                        id={product.id}
                        roomName = {props.roomName}
                        name={product.name}
                        color={product.isLightOn}
                    /> 
                ))}
            </div>

            {/* Control Buttons Row */}
            <button onClick={addProduct} className="bg-blue-500">Add Product</button>
        </div>
    )
}
