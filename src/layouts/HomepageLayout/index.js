import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import './../../pages/Homepage/styles.css'
const HomepageLayout = props => {
    return ( 
        <div>
            <Header {...props} />
                {props.children}
            <Footer />
        </div>  
     );
}
 
export default HomepageLayout;