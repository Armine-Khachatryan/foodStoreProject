import React, { useState } from 'react';
import LoginModal from '../login/login';
import RegisterModal from '../register/register';
import logoImage from '../../assets/images/logo.png';
import './style.css';

function Header() {

    let [modalIsOpen, setIsOpen] =useState(false);
    let [modalRegisterIsOpen, setRegisterpIsOpen] =useState(false);

    function openModal() {
        /*localStorage.setItem('key',JSON.stringify({
            val:14
        }) );*/
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openRegisterModal() {
        setRegisterpIsOpen(true);
    }

    function closeRegisterModal() {
        setRegisterpIsOpen(false);
    }

    return(
    <>
        <div className="header">
            <div className="container head">
                <div className="logos">
                    <div className="logoDiv">
                        <img src={logoImage} alt="logo"/>
                    </div>
                    <div className="lilies">Lilies</div>
                </div>
                <div className="headerPart">
                    <div className="headerHome">Home</div>
                    <div className="headerLogin" onClick={openModal} >Login</div>
                    <div className="headerSignUp" onClick={openRegisterModal}>Sign Up</div>
                </div>
            </div>
        </div>
        <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} openRegisterModal={openRegisterModal}/>
        <RegisterModal   openModal={openModal} modalRegisterIsOpen={modalRegisterIsOpen} closeRegisterModal={closeRegisterModal} closeModal={closeModal} />
        </>
    )
}

            export default Header;


