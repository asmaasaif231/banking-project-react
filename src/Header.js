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
                <a href="index.html" className="navbar-brand"><span>HR</span> Website</a>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="index.html" className="smoothScroll">Home</a></li>
                    <li><a href="login.html" className="smoothScroll">Login</a></li>
                  
                   <hr/>

                </ul>
            </div>

        </div>
    </div>
    
</header>


        );
    }
    
export default Header;
    