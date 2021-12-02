import React, {useState, useEffect} from 'react';
import DashMenu from '../../components/dashMenu/dashMenu';
import DashFoodMenu from '../../components/dashFoodMenu/dashFoodMenu';
import logoImage from "../../assets/images/logo.png";
import ProfilePhoto from "../../assets/images/profilePhoto.png";
import {foodMenuData} from '../../components/data/data';
import './style.css';


function Dashboard() {

    let [count, setCount] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0);

    const toChangeAboveCount = (val) => {
        setCount(count+1)
    }

    const toChangeBelowCount= (val) => {
        setCount(count-1)
    }




    let renderFoodMenu = () => {
        return (
            foodMenuData.map((item, index) => {
                return (
                    <div>
                        <DashFoodMenu dashItemFood={item} key={index} id={index} toChangeAboveCount={toChangeAboveCount}/>,
                    </div>
                )
            })
        )
    }



    return (
        <>
            <div className="dashboardGlobal">
                <div className="dashboard1">
                    <div className="dashLogoTitle">
                        <div className="dashLogo">
                            <img src={logoImage} alt="logo"/>
                        </div>
                        <div className="dashLilies">Lilies</div>
                    </div>
                    <div className="dashMenu">

                        <DashMenu count={count} setCount={setCount} toChangeBelowCount={toChangeBelowCount}/>
                    </div>
                </div>
                <div className="dashboard2">
                    <div className="containerMenu">
                        <div className="foodPlace">
                            <div className="foodPlace1">
                                <div className="foodPlace3">Good morning, Oghenevwede!</div>
                                <div className="foodPlace4">What delicious meal are you craving today?</div>
                            </div>
                            <div className="foodPlace2">
                                <img src={ProfilePhoto} alt="profilePicture"/>
                            </div>
                        </div>
                        <div className="dashboard3">
                            {renderFoodMenu()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;