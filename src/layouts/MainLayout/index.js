import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const MainLayout = props => {
    // takes an abject of props and passes them into the header component
    return ( 
        <div>
            <Header {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer />      
        </div>  
     );
}
 
export default MainLayout;