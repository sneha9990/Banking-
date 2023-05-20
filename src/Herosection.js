import star3 from './images/Star 3.png' ;
import hero from './images/Hero Image.png' ;
import vector5 from './images/Vector 5.png' ;
import rect5 from './images/Rectangle 5.png' ;
import star2 from './images/Star 2.png' ;
import cta from './images/CTA.png' ;
import rect12 from './images/Rectangle 12.png' ;
import img2 from './images/image 2.png' ;
const Herosection = () => {


    return( 
        <div className="rect2">
            <div className="logo">
            <img src={rect5}></img>
        <img className="star3" src={star3}></img> 
        </div>
        <p className="p" >BANQUEE</p>
        <div className="cb">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <img className="vector" src={vector5}></img>
        </div>
            <img className="star2" src={star2}></img>
            <div className="left">
            <h1 className="heading" >EASY WAY TO BANKING</h1>
            <p className="p2" >We give you both the foundation and flexibiity to
                 build and grow digital capabilities and deliver customer experiences</p>
            <img className="cta" src={cta}></img>
            </div>
        <img className="rect12" src={rect12}></img>
        <img className="hero" src={hero}></img>
        <img className="img2" src={img2}></img>
        </div>
    ) ;
}

export default Herosection ;