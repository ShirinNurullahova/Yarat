import React from "react";
import '../DataAndTimeElement/DataAndTimeElement.css';
import Ellipse from '../../images/Ellipse 1.svg'
const DataAndTimeElement = ({style}) => {
    return (
        <div className="daysElement" >
             <img className="redPoint" src={Ellipse} />

            <div className="daysText">
                <p className="daysTextP1">• LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION</p>
                <p className="daysTextP2">• RASHAD ALAKBAROV LOOK AT YOU! SOLO SHOW</p>
                <p className="daysTextP3">• MAKE AN ISLAND FOR YOURSELF</p>
                <p className="daysTextP4">• FOGS TURNED INTO EPIC STORY IN MY HEAD</p>
            </div>

        </div>
    )
}
export default DataAndTimeElement 