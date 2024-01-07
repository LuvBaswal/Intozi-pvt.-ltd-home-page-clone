import {BrowserRouter ,Routes, Route} from "react-router-dom";
import "../Style/Header.css";
import Home from "./Home";



function Header(){
    return(
        <>
           <div className="Header">

            <img src="data:image/png;base64,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" alt=""/>

            
            
            <div >
                <BrowserRouter>
                <a   href="./Home" className="z">Home</a>
                <a href="./">About Us</a>
                <a href="./">Product</a>
                <a href="./">Service</a>
                <a href="./">Case Studies</a>
                <a href="./">BLogs</a>
                <a href="./">Contect Us</a>
 

                <Routes>
                    {/* <Route path="/Home" element={<Home/>}></Route> */}
                </Routes>
                </BrowserRouter>
                
            </div>
            
           </div>
           
           
        </>
    )
}

export default Header