import React, {useState} from 'react';
import './style.css'
import Modal from 'react-modal';
import photo8 from '../../assets/images/photo8.png';

function OrdersModal (props){

    const customStyles = {
        content: {
            top:'0',
            left: '100%',
            transform: 'translateX(-100%)',
            maxWidth: '760px',
            maxHeight: '900px',
            padding: '0px',
            width:'100%'
        },
    }

    // let [orders, setOrders] = useState(JSON.parse(localStorage.getItem('cart')) !== null ? JSON.parse(localStorage.getItem('cart')) : null);
    //
    //
    // let trash= (index) => {
    //     let arr1 = JSON.parse(localStorage.getItem('cart'))
    //     arr1.splice(index, 1);
    //     localStorage.setItem('cart', JSON.stringify(arr1))
    //     setOrders(JSON.parse(localStorage.getItem('cart')))
    //     props.toChangeBelowCount();
    // }
    return(
        <>
            <Modal
                isOpen={props.ordersModalIsOpen}
                onRequestClose={props.closeOrdersModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="ordersContainer">
                    <div className="ordersTitle">Your Orders</div>
                    <div className="ordersSubContainer">
                        <div className="itemWord">Item</div>
                        <div className="itemPart">
                            <div className="eachItem">Qty</div>
                            <div className="eachItem">Price</div>
                            <div className="eachItem">Status</div>
                        </div>
                    </div>
                    {/*<div className="ordersInclusion">*/}

                    {/*    {JSON.parse(localStorage.getItem('cart')) !== null ? JSON.parse(localStorage.getItem('cart')).map((item, index) => (*/}

                    {/*        <div key={item.id}>*/}

                    {/*        <div className="ordersInclusionSubDiv">*/}
                    {/*        <div className="ordersInclusion1">*/}
                    {/*            <div className="ordersInclusion2">*/}
                    {/*                <img src={item.img} alt=""/>*/}
                    {/*            </div>*/}
                    {/*            <div className="orderInclusion3">*/}
                    {/*                <div className="ordersFoodName">{item.name}</div>*/}
                    {/*                <div className="removeAction" onClick={() => {*/}
                    {/*                    trash(index)*/}
                    {/*                }}>Remove</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="quantityPriceDiv">*/}
                    {/*            <div className="quantityDiv">{item.count}</div>*/}
                    {/*            <div className="priceDiv">{item.price}</div>*/}
                    {/*            <div className="ordersStatus">{item.status}</div>*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    )): null}*/}
                    {/*        </div>*/}

                </div>
            </Modal>
        </>
    )}




export default OrdersModal;