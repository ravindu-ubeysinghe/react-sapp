import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img srcSet={props.siteLogo} alt="Beteasy" />
                    </div>
                    <div className="col-sm-8">
                        <h1>
                            Welcome to {props.siteName}
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;