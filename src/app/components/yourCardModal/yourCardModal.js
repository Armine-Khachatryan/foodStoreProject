import React, {useState, useEffect} from 'react';
import './style.css';
import Modal from 'react-modal';


function YourCardModal(props) {

    let [showDiv, setShowDiv] = useState(false);

    const customStyles = {
        content: {
            top: '0',
            left: '100%',
            transform: 'translateX(-100%)',
            maxWidth: '760px',
            maxHeight: '900px',
            padding: '0px',
            width: '100%'
        },
    }


    let remove = (index) => {
        let arr = JSON.parse(localStorage.getItem('cart'))
        arr.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(arr))
        props.setCarts(JSON.parse(localStorage.getItem('cart')))
        props.toChangeBelowCount();
    }


    return (
        <>
            <Modal
                isOpen={props.yourCardModalIsOpen}
                onRequestClose={props.closeYourCardModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="yourCardContainer">
                    <div className="yourCardTitle">Your Cart</div>

                    <div className="cardTitleContainer">
                        <div className="itemWord">Item</div>
                        <div className="itemPart">
                            <div className="eachItem">Qty</div>
                            <div className="eachItem">Unit Price</div>
                            <div className="eachItem">Sub-total</div>
                        </div>
                    </div>
                    <div className="yourCardInclusion">
                        {props.carts.length!==0 ?props.carts.map((item, index) => (

                            <div key={item.id}>

                                <div className="yourCardInclusionSubDiv">

                                    <div className="yourCardInclusion1">
                                        <div className="yourCardInclusion2">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="yourCardInclusion3">
                                            <div className="yourCardFoodName">{item.name}</div>
                                            <div className="removeAction" onClick={() => {
                                                remove(index)
                                            }}>Remove
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quantityPriceDiv">
                                        <div className="quantityDiv">{item.count}</div>
                                        <div className="priceDiv">{item.price}</div>
                                        <div className="subTotalPrice"> {item.totalPrice}</div>
                                    </div>
                                </div>
                            </div>
                        )):null}
                    </div>

                    <div className="totalPriceDiv">
                        <div className="totalWord">Total:</div>
                        {!showDiv?
                        <div
                            className="totalPrice"> {props.carts !== null ? props.carts.reduce((sum, i) => (sum += i.price * i.count), 0):0}
                        </div>:<div
                                className="totalPrice">0 </div>}
                    </div>
                    <div className="checkOutBtn" onClick={props.openCheckoutCloseCart}>Checkout</div>
                </div>
            </Modal>

        </>
    )
}

export default YourCardModal;