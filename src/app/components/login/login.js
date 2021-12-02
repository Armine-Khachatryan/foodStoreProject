import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import Modal from 'react-modal';
import photo5 from '../../assets/images/photo5.png';


function LoginModal (props){

    const navigate  = useNavigate();
    const handleRouteDashBoard = () => {
        navigate('/dashboard');
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const openRegCloseLog=()=>{
        props.closeModal();
        props.openRegisterModal();
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '1440px',
            height:'900px',
            padding: '0px',
            width: '100%',
            border:'none'
        },
    };

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            ...values,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: null
        });
    };

    const handleSubmit = () => {
        const {email, password} = values;
        let valid = true;
        let emailMessage = null;
        let passwordMessage = null;


        if (!email) {
            emailMessage = "Email is required";
            valid = false
        }

        if (email) {
            const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailReg.test(email)) {
                emailMessage = "Invalid email";
                valid = false
            }
        }

        if (!password) {
            passwordMessage = "Password is required";
            valid = false
        }

        if (password) {
            /*const strongPassRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (!strongPassRegex.test(password)) {
                passwordMessage = 'Password  must contain at least 1 lowercase, uppercase character, 1 number and 1 special character, must be eight characters or longer';*/
            if (password.length < 8) {
                passwordMessage = 'Password should contain more than 8 characters'
                valid = false
            }
        }

        setErrors({
            email: emailMessage,
            password: passwordMessage,
        });

        if (valid) {
            handleRouteDashBoard();
        }
    }




    return(
        <>
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="globalLogin">
                <div className="picDiv">
                    <img  className="ph5" src={photo5} alt="familyDinner"/>
                </div>
                <div className="formDivLogin">
                    <div className='formSubDivLogin'>
                    <div className="loginTitle">Welcome Back!</div>
                        <div className="emailDiv">
                        <input className="emailInputLogin" type="text" placeholder="Your Email address" name="email"  value={values.email} onChange={handleChange}/>
                        <div className="text-danger">
                            {errors.email}
                        </div>
                        </div>
                            <div className="inputDivLogin">
                                <input className="passwordInputLogin"  type={passwordShown ? "text" : "password"} placeholder="Your Password" name="password" value={values.password} onChange={handleChange}/>
                        <div className="showLogin" onClick={togglePassword}>show</div>
                                <div className="text-danger">
                                    {errors.password}
                                </div>
                    </div>
                    <div className="loginBtn" onClick={handleSubmit}>LOGIN</div>
                    <div className="accountPsw">
                        <div className="creatingAccount" onClick={openRegCloseLog}>Create an account</div>
                        <div className="forgotPsw">Forgot Passoword</div>
                    </div>
                    </div>
                </div>
            </div>
        </Modal>
            </>
            )
            }


export default LoginModal;
