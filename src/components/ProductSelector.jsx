import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function ProductSelector(props) {
    const baseDivStyles = "w-40 h-40 flex items-center justify-center border border-black";
    const defProduct = "Air conditioner"
    const setProductSelectorVisible = props.setProductSelectorVisible

    const { roomList, setRoomList } = useContext(AppContext);
    const [selectedProduct, setSelectedProduct] = useState(defProduct);

    // Handle selection changes
    const handleChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    function add() {
        let room = roomList.find(r => r.name === props.roomName);
        let len = room.products.length
        if(len >= 1) {

            // Avoid an 'Electric heater' in all rooms accept 'Bathroom'
            let roomType = room.type;
            if(roomType !== 'Bathroom' && selectedProduct === 'Electric heater') {
                alert("Error")
                return <div>No data available</div>;
            }

            // Avoid more the one 'Stereo' in all rooms
            let stereoObj = room.products.find(o => o.name === 'Stereo');
            if(stereoObj != undefined && selectedProduct === 'Stereo') {
                alert("Error")
                return <div>No data available</div>;
            }
        } 
        
        // Avoid more the 5 products in all rooms
        if(len == 5) {
            alert("Error")
            return <div>No data available</div>;
        }

        // Add a product
        let id = len + 1
        let product = {
            "id":id,  "name": selectedProduct, "isLightOn": "false"
        }
        addProductToRoom( roomList, setRoomList, props.roomName, product);
        setProductSelectorVisible(false);
    }

    return (
        <div className="border border-blue-300 p-4 max-w-3xl mx-auto flex flex-col items-start gap-4">
            <div>
                <select name="productName" id="productName" defaultValue={defProduct} onChange={handleChange}>
                    <option value={defProduct}>{defProduct}</option>
                    <option value="Lamp">Lamp</option>
                    <option value="Stereo">Stereo</option>
                    <option value="Electric heater">Electric heater</option>
                </select>
            </div>
            <div>
                <button onClick={add} className="bg-blue-500">Add</button>
            </div>
        </div>
    )
}


const addProductToRoom = (roomList, setRoomList, roomName, newProduct) => {
    // Create a new array by mapping through the existing roomList
    const updatedRoomList = roomList.map(room => {
      // If this is the room we want to update
      if (room.name === roomName) {
        // Return a new room object with the updated products array
        return {
          ...room,
          products: [...room.products, newProduct]
        };
      }
      // Otherwise return the room unchanged
      return room;
    });
    
    // Update the state with the new array
    setRoomList(updatedRoomList);
  };