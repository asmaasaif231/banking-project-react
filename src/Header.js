import { Link } from "react-router-dom";

function   Header(){
    return (
<header>
    <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">

            <div className="navbar-header">
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                </button>
                <Link to='/' className="navbar-brand"><span>learning & Development</span> Hub</Link>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">

                    <li>  <Link to='/' className="smoothScroll">Home</Link></li>
                    <li>  <Link to='/LoginForm' className="smoothScroll">Login</Link></li>
                  
                   <hr/>

                </ul>
            </div>

        </div>
    </div>
    
</header>


        );
    }
    
export default Header;
    