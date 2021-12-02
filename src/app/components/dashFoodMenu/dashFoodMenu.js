import React, {useState , useEffect} from 'react';
import './style.css';
import FoodItemModal from '../foodItemModal/foodItemModal';


function DashFoodMenu (props ){
    let [foodItemModalIsOpen, setFoodItemModalIsOpen ]=useState(false);

    function openFoodItemModal () {
        setFoodItemModalIsOpen(true);
    }

    function closeFoodItemModal (){
        setFoodItemModalIsOpen(false);
    }

    return(
        <>
            <div className="foodPlacePart">
                <div className="foodPlacePart1" onClick={openFoodItemModal}>
                <div className="foodPlacePart2">
                    <img src={props.dashItemFood.imgFood} alt="food"/>
                </div>
                <div className="foodPlacePart3">{props.dashItemFood.nameFood}</div>
                <div className="foodPlacePart4">{props.dashItemFood.descriptionFoodShort}</div>
                    <div className="foodPlacePart5">
                <div className="foodPlacePart6">N {props.dashItemFood.priceFood}</div>
                <div className="foodPlacePart7"
                     onClick={(e) => {
                         setFoodItemModalIsOpen(true)
                     }}>
                    {props.dashItemFood.actionFood}</div>
                        </div>
                </div>
            </div>
            <FoodItemModal foodItemModalIsOpen={foodItemModalIsOpen} id={props.id} closeFoodItemModal={closeFoodItemModal} foodItemModalItem={props.dashItemFood} toChangeAboveCount={props.toChangeAboveCount}/>
        </>
    )
}

export default DashFoodMenu;
