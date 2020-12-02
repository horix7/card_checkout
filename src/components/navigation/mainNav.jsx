import React, {Component, Fragment} from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import cardPic from '../../Assets/debit_card_100px.png'

export default class MainNav extends Component  {

    render( ) {
        return (
            <Fragment>
                <nav className="navigation">
                    <div className="back">
                        <IconContext.Provider value={{ color: "black", className: "backIcon" }} >
                            <BsArrowLeft />
                        </IconContext.Provider>

                        <p>Back to e-shop</p>
                    </div>

                    <div className="logo">
                        <div className="image">
                            <img width="50px" src={cardPic} alt=""/>
                        </div>

                        <p>E-marchant Card</p>
                    </div>

                    <div className="country">
                        <select name="Country" className="Countries" id="ComboCountry">
                            <option defaultChecked value="Rwanda">
                                Rwanda(Frw)
                            </option>

                            <option value="UK">
                                UK(£)
                            </option>

                            <option value="USA">
                                USA($)
                            </option>

                        </select>
                    </div>
                </nav>

            </Fragment>

            
        )
    }
}