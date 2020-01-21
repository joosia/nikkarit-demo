import React from 'react';
import './Layout.module.css';
//import Testi from '../../components/Testi/Testi';

const layout = (props) => {
    return (
        // React.Fragment on tässä tapauksessa Reactin vaatima ympäröivä komponentti, voisi olla myös esim div
        <React.Fragment>
            <Testi/>
        </React.Fragment>
    );
}

export default layout;