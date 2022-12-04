import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <div>
         
        <ul className="">  
         
  <li className="luv" ><Link class="active" to ="/">Home</Link></li>  

  <li className="pad"><Link to="/Watchlist">Watchlist</Link></li>  

</ul> 
        </div>

     );
}

export default Navbar;