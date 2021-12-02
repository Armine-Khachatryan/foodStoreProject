import React from 'react';
import './style.css';
import photo1 from '../../assets/images/photo1.png';
import photo2 from '../../assets/images/photo2.png';
import photo3 from '../../assets/images/photo3.png';
import photo4 from '../../assets/images/photo4.png';
import badges from '../../assets/images/badges.png';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Home (){




    return (
        <div className="whole">
            <div >
                <Header />
                <main>
            <section className="foodSection">
                <div className="container">
                    <div className="firstDiv">
                        <div className="secondDiv">
                            <div className="foodTitle"> Order food anytime,anywhere</div>
                                <div className="foodText">Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</div>
                                    <div className="badg">
                                        <img src={badges} alt='badgPhoto'/>
                                    </div>
                                </div>
                        <div className="thirdDiv">
                            <img src={photo1} alt="foodImage"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mealSection">
                <div className="container">
                    <div className="mealTitle">Special Meals of the day!</div>
                        <div className="meals">
                            <div className="mealTextImg">
                                <div className="mealImg">
                                    <img src={photo2} alt="meal1Image"/>
                                </div>
                                <div className="mealSubTitle">Stir fry Pasta</div>
                                <div className="mealText">Stir fry pasta yada yada yada because of Sesan</div>
                            </div>
                            <div className="mealTextImg">
                                <div className="mealImg">
                                    <img src={photo3} alt="meal2Image"/>
                                </div>
                                <div className="mealSubTitle">Meat Balls</div>
                                <div className="mealText">Stir fry pasta yada yada yada because of Sesan</div>
                            </div>
                            <div className="mealTextImg">
                                <div className="mealImg">
                                    <img src={photo4} alt="meal3Image"/>
                                </div>
                                <div className="mealSubTitle">Burger Meal</div>
                                <div className="mealText">Stir fry pasta yada yada yada because of Sesan</div>
                            </div>
                        </div>
                </div>
            </section>
            <section className="notifiedSection">
                <div className="container">
                    <div className="notInput">
                        <div className="notText">
                            <div className="notifiedTitle">Get notified when we update!</div>
                            <div className="notifiedText">Get notified when we add new items to our specials menu, update our price list of have promos!</div>
                        </div>
                        <div className="inputAndButton">
                            <div className="mailInput">
                                <input className="emailInp" type="text" placeholder="gregphillips@gmail.com" name="email" required/>
                            </div>
                            <div className="notifiedButton">Get notified</div>
                        </div>
                    </div>
                </div>
            </section>
                </main>
            </div>
            <div>  <Footer /></div>
        </div>
    );
}
export default Home;

