import React, {useState, useEffect} from 'react';
import './style.css'
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";


function CheckOutModal (props){
    const customStyles = {
        content: {
            top:'0',
            left: '100%',
            transform: 'translateX(-100%)',
            maxWidth: '521px',
            maxHeight: '900px',
            padding: '0px',
            width:'100%'
        },
    }


    let [show, setShow] = useState(false);

    const navigate  = useNavigate();
    const handleRouteCheckOut = () => {
        navigate('/dashboard');
    }

    function formatString(event) {
        const inputChar = String.fromCharCode(event.keyCode);
        const code = event.keyCode;
        const allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
            return;
        }

        event.target.value = event.target.value.replace(
            /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
            /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
            /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
            /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
            /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
            /\/\//g, '/' // Prevent entering more than 1 `/`
        );
    }


    const [values, setValues]=useState({
        cardNumber:'',
        expDate:'',
        CVV:''
    });

    const [errors, setErrors] = useState({
        cardNumber:null,
        expDate:null,
        CVV: null
    })

    const handleChanges =(e) =>{
        if (e.target.name === "expDate"){
            formatString(e);
        }

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: null
        });
    };

    let clearWhenClosing=()=>{
       props.closeCheckOutModal();
        setValues({
            cardNumber:'',
            expDate:'',
            CVV:''
        })

        setErrors({
            cardNumber:null,
            expDate:null,
            CVV: null
        })
        setShow(false)
    }

    const paymentFunction=()=> {
        setShow(true);
        localStorage.removeItem("cart");
    }


    const handleSubmitPaymentMethod=()=>{
        const {cardNumber,expDate, CVV} = values;
        let valid = true;
        let cardNumberMessage=null;
        let expDateMessage=null;
        let CVVMessage=null;


        if(!cardNumber){
            cardNumberMessage="Card number is required";
            valid=false
        }

        if(cardNumber){
            const cardNumberReg =  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
            console.log(cardNumberReg.test(cardNumber) , "test")
            if (!cardNumberReg.test(cardNumber)) {
                cardNumberMessage="Invalid card numbers";
                valid=false
            }
        }

        if(!CVV){
            CVVMessage="CVV is required";
            valid=false
        }

        if(CVV){
            const CVVReg= /^[0-9]{3,4}$/;
            if(!CVVReg.test(CVV)){
                CVVMessage="Invalid CVV";
                valid=false
            }
        }

        if(!expDate){
            expDateMessage="Expiry date is required";
            valid=false
        }

        setErrors({
            cardNumber:cardNumberMessage,
            expDate:expDateMessage,
            CVV: CVVMessage,
        });


        setValues({
            cardNumber: '',
            expDate: '',
            CVV: '',
        })

        if (valid){
            paymentFunction()
        }
    }

    return(
        <>
            <Modal
                isOpen={props.checkOutModalIsOpen}
                onRequestClose={clearWhenClosing}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="checkItemContainer">
                    <div className="checkoutTitle">Checkout</div>
                    <div className="inputErrDiv">
                    <input className="inputInfo cardInfo" type="text" placeholder="**** **** **** ****" name="cardNumber"  value={values.cardNumber}  onChange={handleChanges} required/>
                    <div className="text-danger">
                        {errors.cardNumber}
                    </div>
                    </div>
                    <div className="inputErrDiv">
                    <input className="inputInfo expInfo" type="text" placeholder="Exp Date" name="expDate"  value={values.expDate}  onChange={handleChanges} maxlength={5}/>
                        <div className="text-danger">
                            {errors.expDate}
                        </div>
                    </div>
                    <div className="inputErrDiv">
                    <input className="inputInfo cvvInfo" minLength={3} maxLength={4} type="tel" placeholder="CVV/CVV2" name="CVV"  value={values.CVV}  onChange={handleChanges}/>
                        <div className="text-danger">
                            {errors.CVV}
                        </div>
                    </div>
                    <div className="paymentBtnDiv" onClick={handleSubmitPaymentMethod}>Make Payment</div>
                    {show? <div className='paymentStatus'>Payment done successfully!</div> :null}
                </div>
            </Modal>
        </>
    )}
export default CheckOutModal;
