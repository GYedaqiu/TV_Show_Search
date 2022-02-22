import React from 'react';

const Aboutpage = () => {
    return (
        <div className="about">
            <h3 className="about__title">
                About Page
            </h3>
            <div className="about__info">
                <p>TV Show Search App</p>
                <div>
                    <p>
                        Things used for this React App:
                    </p>
                    <ul>
                        <li>React with create-react-app</li>
                        <li>Css & HTML</li>
                        <li>Axios AJAX Request</li>
                        <li>TVMAZE API</li>
                        <li>React Router</li>
                        <li>Depolying to Netlify</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Aboutpage;
