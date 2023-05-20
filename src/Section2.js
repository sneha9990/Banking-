import mini from './images/Mini Section.png'
import rect7 from './images/Rectangle 7.png'
import grp16 from './images/Group 16.png'
import grp17 from './images/Group 17.png'
import mg from './images/Mask group.png'
import faq from './images/FAQ.png'
import nl from './images/Newsletter.png'
import trustedby from './images/trusted by People all over the world.png'
const Section2 = () => {

    return(
        <div>
         <div className ="mini">
             <img className="mini" src={mini}></img>
        </div> 
           <img className="trustedby" src={trustedby}></img>
        <div>
        <img className="rect7" src={rect7}></img>
        <img className="mg" src={mg}></img>
        <div class="tm">
            <img className="grp16" src={grp16}></img>
            <img className="grp17" src={grp17}></img>
        </div>
        </div>
            <img className="faq" src={faq}></img>
        <img className="nl" src={nl}></img>
        </div>
    );
}

export default Section2 ; 