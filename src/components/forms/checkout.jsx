import React , {Component , Fragment } from 'react'
import AfricXyz from '../../Assets/Africaxyz.png'
import paypal from '../../Assets/payapl.png'
import bank from '../../Assets/momo.png'
import credit from '../../Assets/credit.png'
import cvv from '../../Assets/cvv.jpg'
import secure from '../../Assets/secure.png'
import { IconContext } from 'react-icons/lib'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import MomoPay from '../calls/payment'
import ReactLoading from 'react-loading';
 import nodeForge from 'node-forge'
 import PayPal from '../calls/paypal'
 import axios from 'axios'
import MoreIcon from '../navigation/popover'
import { Typography } from '@material-ui/core'
import { loadStripe } from "@stripe/stripe-js";
 import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./card";
import  Alert  from '../calls/alert.'
import FluertWave from './fluttercheckout'



const momo = new MomoPay()
const id = "pk_test_51HmcOVH8YQ1PwvyejL4S6hKDCMuHMeEAwEIlZxBFafEnDK3Ka0M8gwBqZc4vLzOJGlmmQW3wTc5EJyECQsPPrtYM00ViNcbHpR"
const secret = "sk_test_51HmcOVH8YQ1PwvyeIqDD8BpbehP8QPDImrEpgZKFyyh7HJ03DpyoCmngVy1ShYzeb2wUjKa6oZqd9H1YpT5p5iM000ZVbeJnFh"
const promise = loadStripe(id);



export default class CheckoutForn extends Component {

    state = {
        card_number: "",
        card_valid: "",
        card_code: "",
        open_momo: false,
        number: "",
        error:false,
        sucess: false,
        form: null,
        loading: false
    }



    // getCreditCardPaymentFrom = () => {
    //     axios.get("http://localhost:3000/").then(response => {
    //         set
    //     })
    // }

    changeAlertMessage = (content) => {
        this.setState({
            openAlert: true,
            content: content.content,
            severity: content.severity
        })
    }

    makePayment = () => {

        // this.setLoading(true)
        
        if(this.state.open_momo) {
            momo.payMomo(this.setLoading , this.setErrorMade, this.state.number ,this.setSuccess)
        } else {
            this.changeAlertMessage({
                severity: "info",
                content: "Card Payment Is not working now "})
        }
    }

    changeToMomo = () => {
        console.log("Changed")  
        const { open_momo } = {...this.state}
         this.setState({open_momo : !open_momo   })
    }
    setLoading = (loading) => {

        this.setState({
            loading: loading
        })
    } 

    setSuccess = (loading) => {

        // this.setState({
        //     sucess: loading
        // })

        this.changeAlertMessage({
            severity: "success",
            content: "success it's made haha " })
    } 


    setErrorMade = (loading) => {
        this.changeAlertMessage({
            severity: "error",
            content: "Something Went Wrong " })
        this.setState({
            error: loading
        })
    }
    cardNumberChanger = (event) => {
        // if(event.target.value )
    }

    cardValidChanger = () => {
        
    }

    cardCodeChanger = () => {
        
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
                                    <li onClick={this.changeToMomo} ><img width="90%" src={paypal} alt=""/></li>
                                    <li onClick={this.changeToMomo}><img width="90%" src={bank} alt=""/></li>
                                </ul>

                           </div>

                           <div className="form">
                               

                                { !this.state.open_momo ? 
                                <> 
                                <p className="mainP">
                                   Safe Card Checkout 
                               </p>
                                <div className="cardImage">
                                        <img width="300px" src={credit} alt=""/>
                                </div>

                                <div className="towEnd">
                                    <p>Do Your Card Permit Online Payment </p>
                                   <MoreIcon>
                                       <Typography> More Infor mation </Typography>
                                   </MoreIcon>
                                </div>

                               
                                <Elements stripe={promise}>
                                    <CheckoutForm />
                                </Elements>

                                   <p className="or"> or </p> <br />
                                    <PayPal setSucess={this.setSuccess} total="100" />
                                   
                                   <p className="or"> or </p> <br />

                                    <FluertWave />
                           

                                </>
                                : <div className="momoform">
                                <label> Provide Your Mobie number  </label>
                                <input type="number" name="card_number" id="card" onChange={(event) => this.setState({number: event.target.value}) } placeholder="number " />
                                <button className="sq-input" onClick={this.makePayment}> {!this.state.loading  ? "Pay" : <ReactLoading type={"bars"} color={"white"} height={'30px'} width={'30px'} /> } </button>     
                               
                                </div> }
                              
                            </div>
                            <div className="info">
                                <div className="infoHead2">
                                    <p>Summary Of Your Payment </p>
                                </div>

                                <div className="infoPart">
                                    <div className="towEnd">
                                        <p>Merchant</p>
                                       <MoreIcon>
                                           <p>Merchant Information  </p>
                                       </MoreIcon>
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
                                        <p>Payment Number</p>
                                       <MoreIcon>
                                           <p> Pyament Number Info  </p>
                                       </MoreIcon>
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

                    <Alert open={this.state.openAlert} severity={this.state.severity} handleClose={() => {
                        this.setState({
                            openAlert: false 
                        })
                    }} content={this.state.content} />
            </Fragment>
        )
    }
}