import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import Modal from 'react-modal';
import photo6 from '../../assets/images/photo6.png';

function RegisterModal (props){

    const navigate  = useNavigate();
    const handleRouteDashBoard = () => {
        navigate('/dashboard');
    }


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


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

    let closeAndOpen = () => {
        props.closeRegisterModal();
        props.openModal()
    }



    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        fullName: null,
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

    const handleSubmit1 = () => {
        const {fullName, email, password} = values;
        let valid = true;
        let fullNameMessage = null;
        let emailMessage = null;
        let passwordMessage = null;


        if (!fullName) {
            fullNameMessage = "Name and surname are required";
            valid = false
        }

        if (fullName) {
            const nameReg = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
            if (!nameReg.test(fullName)) {
                fullNameMessage = "Invalid name and surname";
                valid = false
            }
        }

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
            const strongPassRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (!strongPassRegex.test(password)) {
                passwordMessage = 'Password  must contain at least 1 lowercase, uppercase character, 1 number and 1 special character, must be eight characters or longer';
                valid = false
            }
        }

        setErrors({
            fullName: fullNameMessage,
            email: emailMessage,
            password: passwordMessage
        });

        setValues({
            fullName: '',
            email: '',
            password: ''
        })


        if (valid) {

        }
    }


    return(
        <>
            <Modal
                isOpen={props.modalRegisterIsOpen}
                onRequestClose={props.closeRegisterModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="globalRegister">
                    <div className="picDiv">
                        <img className="ph6" src={photo6} alt="pancakes"/>
                    </div>
                    <div className="formDivRegister">
                        <div className='formSubDivRegister'>
                            <div className="RegisterTitle">Welcome to Lilies!</div>
                            <div className="fullNameRegisterDiv">
                                <input className="nameInputRegister" type="text" placeholder="Your First Name" name="fullName"  value={values.fullName}  onChange={handleChange} />
                                <div className="text-danger">
                                    {errors.fullName}
                                </div>
                            </div>
                            <div className="emailRegisterDiv">
                            <input className="emailInputRegister" type="text" placeholder="Your Email address" name="email"  value={values.email}  onChange={handleChange}/>
                            <div className="text-danger">
                                {errors.email}
                            </div>
                            </div>
                            <div className="inputDivRegister">
                                <input className="passwordInputRegister"  type={passwordShown ? "text" : "password"} placeholder="Your Password" name="password"  value={values.password} onChange={handleChange}/>
                                <div className="showRegister" onClick={togglePassword}>show</div>
                                <div className="text-danger">
                                    {errors.password}
                                </div>
                            </div>
                            <div className="signUpBtn"  onClick={handleSubmit1}>SIGN UP</div>
                            <div className="alreadyHavAccLog">
                                <div className="alreadyHavAcc">Already have an account.
                                <span className="wordLogin" onClick={closeAndOpen}> LOGIN</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Modal>
        </>
    )
}

export default RegisterModal;