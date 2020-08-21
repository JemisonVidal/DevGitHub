import React from 'react';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Main = (props) => {
    return (
        <React.Fragment >
            <Nav />
            <Header {...props} />
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Main;
