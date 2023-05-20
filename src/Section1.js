import grp4 from './images/Group 4.png'
import grp5 from './images/Group 5.png'
import grp6 from './images/Group 6.png'
import grp7 from './images/Group 7.png'
import card1 from './images/Card 1.png'
import bsns from './images/Businesses.png'
import all from './images/all features you need in one plaCE.png'
const Section1 = () => {

    return(
        <div>
            <img className="one" src={all}></img>
        <div className="sec1">
            <img className="grp4" src={grp4}></img>
            <img className="grp5" src={grp5}></img>
        </div>
        <div className="sec11">
        <img className="grp7" src={grp7}></img>
        <img className="grp6" src={grp6}></img>
        </div>
        <img className="card1" src={card1}></img>
        <img className="bsns" src={bsns}></img>
        </div>
    );
}


export default Section1 ;