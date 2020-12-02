import React , {Component , Fragment } from 'react'
import AfricXyz from '../../Assets/Africaxyz.png'
import paypal from '../../Assets/payapl.png'
import bank from '../../Assets/bank.png'
import credit from '../../Assets/credit.png'
import secure from '../../Assets/secure.png'
import { IconContext } from 'react-icons/lib'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
export default class CheckoutForm extends Component {

    state = {

    }


    render() {
        return (
            <Fragment>

                    <div className="checkout">
                        <div className="checkoutHead">
                            <img width="250px" src={AfricXyz} alt=""/>
                            <p>3D Secure Payment GateWay</p>
                        </div>

                       <div className="formHolder">
                           <div className="option">
                               <div className="checkoutInd">
                                 <p>  Card Payment </p> <IconContext.Provider value={{className: "moreIcon"}}>
                                       <IoIosArrowForward />
                                   </IconContext.Provider>
                               </div>
                                <ul>
                                    <li><img width="150px" src={paypal} alt=""/></li>
                                    <li><img width="150px" src={bank} alt=""/></li>
                                </ul>

                           </div>

                           <div className="form">
                               <p className="mainP">
                                   Safe Card Checkout 
                               </p>
                                <div className="cardImage">
                                        <img width="300px" src={credit} alt=""/>
                                </div>

                                <div className="towEnd">
                                    <p>Do Your Card Permit Online Payment </p>
                                    <IconContext.Provider value={{className:"questionMark"}}>
                                            <BsFillQuestionCircleFill />
                                        </IconContext.Provider>
                                </div>

                                <div className="inputs">
                                    <div className="inputHolder">
                                        <label> Your Card Number : </label>
                                        <input type="number" name="card_number" id="card"/>
                                    </div>

                                    <div className="inputHolder">
                                        <label> Card Valid Still : </label>
                                        <div className="two">
                                            <select name="" id="">
                                                <option defaultChecked value=""> 12 </option>
                                                <option value=""> 9 </option>
                                            </select>

                                            <select name="" id="">
                                                <option defaultChecked value=""> 20 </option>
                                                <option value=""> 21 </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="inputHolder">
                                        <label> Verfifcation Code  : </label>
                                        <div className="towEnd">
                                        <input type="number" name="card_number" id="card"/>
                                        <IconContext.Provider value={{className:"questionMark"}}>
                                            <BsFillQuestionCircleFill />
                                        </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>

                                <button className="checkoutBtn">Pay </button>
                            </div>

                            <div className="info">
                                <div className="infoHead2">
                                    <p>Summary Of Your Payment </p>
                                </div>

                                <div className="infoPart">
                                    <div className="towEnd">
                                        <p>Merchant</p>
                                        <IconContext.Provider value={{className:"questionMark"}}>
                                            <BsFillQuestionCircleFill />
                                        </IconContext.Provider>
                                    </div>
                                    <ul>
                                        <li>ID:RWF121312</li>
                                        <li>AFRICA STORE </li>
                                        <li>Kigali Rwanda (RW) </li>
                                        <li>pay.africa.store </li>
                                    </ul>
                                </div>

                                <div className="infoPart">
                                <div className="towEnd">
                                        <p>Paymeny Number</p>
                                        <IconContext.Provider value={{className:"questionMark"}}>
                                            <BsFillQuestionCircleFill />
                                        </IconContext.Provider>
                                    </div>
                                    <ul>
                                        <li>#234342</li>
                                    </ul>
                                </div>
                                
                                <div>
                                <div className="towEnd">
                                        <p className="lefta">Total</p>
                                    </div>
                                        <p className="bigLi">240.12 EUR</p>
                                </div>

                                <div>
                                    <img src={secure} className="secureImg" width="100%" height="100px" alt=""/>
                                </div>
                            </div>
                       </div>
                    </div>
            </Fragment>
        )
    }
}