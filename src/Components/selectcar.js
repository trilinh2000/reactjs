import { useState } from "react";

function Car(){
    const colorCar=["White","blcak","pink","blue"];
    const carlist=["Mercedes S600","BWM","Cabriolet"];
    const [selectedCar,setSelectedCar]=useState({Car:carlist[0],color:colorCar[0]});
    return (
        <div>
            <select onChange={(e)=>(setSelectedCar({...selectedCar,color:e.target.value}))}>
                {colorCar.map((items)=>(
                <option value={items}>{items}</option>
                ))
                }
            </select>
            <select onChange={(e)=>(setSelectedCar({...selectedCar,Car:e.target.value}))}>
                {carlist.map((items1)=>(
                <option value={items1}>{items1}</option>
                ))
                }
            </select>
            <p>{selectedCar.color}-{selectedCar.Car}</p>
        </div>
    )
}
export default Car;