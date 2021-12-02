import React, {useEffect, useState} from 'react';
import './style.css';
import HomeIcon from '../../assets/images/homeIcon.png';
import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.png';
import Icon3 from '../../assets/images/icon3.png';
import YourCardModal from '../yourCardModal/yourCardModal';
import OrdersModal from '../ordersModal/ordersModal';
import CheckOutModal from "../checkoutModal/checkoutModal";


function DashMenu(props) {

    let [yourCardModalIsOpen, setYourCardModal] = useState(false);
    let [ordersModalIsOpen, setOrdersModal] = useState(false);
    let [checkOutModalIsOpen, setCheckOutModalIsOpen]=useState(false);
    let [carts, setCarts] = useState( [])

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(cart){
            setCarts(cart)
        }
    }, [yourCardModalIsOpen])


    function openYourCardModal() {
        setYourCardModal(true);
    }

    function closeYourCardModal() {
        setYourCardModal(false);
    }

    function openOrdersModal() {
        setOrdersModal(true);
    }

    function closeOrdersModal() {
        setOrdersModal(false);
    }

    function openCheckOutModal (){
        setCheckOutModalIsOpen(true)
    }

    function closeCheckOutModal(){
        setCheckOutModalIsOpen(false)
    }


    const openCheckoutCloseCart =  () => {
        openCheckOutModal();
        closeYourCardModal();
    }



    return (
        <>
            <div className="dashIconCount">
                <div className="dashIconTxt">
                    <div className="dashIcon">
                        <img src={HomeIcon} alt="icons"/>
                    </div>
                    <div className="dashTxt"> Dashboard
                    </div>
                </div>
                <div className="dashCount "></div>
            </div>


            <div className="dashIconCount">
                <div className="dashIconTxt">
                    <div className="dashIcon">
                        <img src={Icon1} alt="icons"/>
                    </div>
                    <div className="dashTxt"> Your Profile
                    </div>
                </div>
                <div className="dashCount "></div>
            </div>

            <div className="dashIconCount">
                <div className="dashIconTxt">
                    <div className="dashIcon">
                        <img src={Icon2} alt="icons"/>
                    </div>
                    <div className="dashTxt" onClick={openOrdersModal}> Orders
                    </div>
                </div>
                <div className="dashCount green"> {props.count}</div>
            </div>

            <div className="dashIconCount">
                <div className="dashIconTxt">
                    <div className="dashIcon">
                        <img src={Icon3} alt="icons"/>
                    </div>
                    <div className="dashTxt" onClick={openYourCardModal}> Your Cart
                    </div>
                </div>
                <div className="dashCount brown"> {props.count}</div>
            </div>
               <YourCardModal carts={carts} setCarts={setCarts} yourCardModalIsOpen={yourCardModalIsOpen}  closeYourCardModal={closeYourCardModal} toChangeBelowCount={props.toChangeBelowCount} openCheckoutCloseCart={openCheckoutCloseCart}/>
            <OrdersModal ordersModalIsOpen={ordersModalIsOpen} closeOrdersModal={closeOrdersModal} toChangeBelowCount={props.toChangeBelowCount}/>
            <CheckOutModal setCount= {props.setCount} count={props.count} checkOutModalIsOpen={checkOutModalIsOpen} closeCheckOutModal={closeCheckOutModal} setCarts={setCarts}/>
        </>
    )
}

export default DashMenu;