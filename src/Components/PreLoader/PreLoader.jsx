import pre from "../../Images/pre.svg";
import "./preloader.css";
const PreLoader = () => {
    return ( 
        <div className="preloader">
            <img src={pre} alt="" />
        </div>
    );
}

export default PreLoader;