import React, {useState} from 'react';
import './style.css'
import Modal from 'react-modal';


function FoodItemModal(props) {
    let [count, setCount] = useState(1)
    let [price, setPrice] = useState(props.foodItemModalItem.priceFood)
    let [totalPrice, setTotalPrice] = useState(props.foodItemModalItem.priceFood)
    let [availableItemsQuantity, setAvailableItemsQuantity] = useState(props.foodItemModalItem.availableQuantity)

    const customStyles = {
        content: {
            top: '0',
            left: '100%',
            transform: 'translateX(-100%)',
            maxWidth: '521px',
            maxHeight: '900px',
            padding: '0px',
            width: '100%'
        },
    }


    let add = () => {
        if (count < +props.foodItemModalItem.availableQuantity)// string e number enq dardznum
            setCount(count + 1)
        setTotalPrice((count + 1) * price)
    }

    let remove = () => {
        if (count >= 1) {
            setCount(count - 1)
            setTotalPrice((count - 1) * price)
        }
    }

    let addBox = () => {
        let data = {
            id: props.id,
            count,
            totalPrice,
            price,
            availableItemsQuantity,
            status:props.foodItemModalItem.status,
            img: props.foodItemModalItem.imgFood,
            name: props.foodItemModalItem.nameFood,
        }

        let arr = JSON.parse(localStorage.getItem('cart'))
        if (arr) {
            let index = arr.findIndex(item => item.id === data.id)
            console.log(index);
            if (index !== -1) {//true e (1 true){
                if(availableItemsQuantity-data.count>=0){
                arr[index].count = arr[index].count + data.count;
                arr[index].totalPrice = arr[index].totalPrice + data.totalPrice;
                arr[index].availableItemsQuantity = +arr[index].availableItemsQuantity - data.count;
                setAvailableItemsQuantity(arr[index].availableItemsQuantity)

                //setAvailableItemsQuantity(availableItemsQuantity - data.count)
                ;
                localStorage.setItem('cart', JSON.stringify(arr))
                }
            } else {
                arr.push(data);
                arr[arr.length - 1].availableItemsQuantity = arr[arr.length - 1].availableItemsQuantity - data.count;
                setAvailableItemsQuantity(arr[arr.length - 1].availableItemsQuantity)
                //setAvailableItemsQuantity(availableItemsQuantity - data.count)
                localStorage.setItem('cart', JSON.stringify(arr))
                props.toChangeAboveCount()
            }
        } else {
            props.toChangeAboveCount()
            setAvailableItemsQuantity(availableItemsQuantity - count)
            data.availableItemsQuantity = availableItemsQuantity - count
            localStorage.setItem('cart', JSON.stringify([data]))
        }
    }


    return (
        <>

            <Modal
                isOpen={props.foodItemModalIsOpen}
                onRequestClose={props.closeFoodItemModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="foodCardContainer">
                    <div className="foodCardImg">
                        <img src={props.foodItemModalItem.imgFood} alt="foodImg"/>
                    </div>
                    <div className="foodCardTitle">{props.foodItemModalItem.nameFood}</div>
                    <div className="foodCardDescription">{props.foodItemModalItem.descriptionFoodLong}</div>
                    <div className="foodCardDetails">
                        <div className="sum">NGN {props.foodItemModalItem.priceFood}</div>
                        <div className="sum">Total {totalPrice}</div>
                        <div className="quantity">{props.foodItemModalItem.preparationTime} Mins</div>
                        <div className="available">{availableItemsQuantity} Pcs Avail</div>
                    </div>
                    <div className="addOperations">
                        <div className="operationsAll">
                            <div className="operations1" onClick={remove}>-</div>
                            <div className="operations2">{count}</div>
                            <div className="operations3" onClick={add}>+</div>
                        </div>
                        <div className="adding" onClick={addBox}>Add to cart</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default FoodItemModal;