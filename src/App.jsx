import React from 'react';
import NavBar from '../Components/navBar'
import AboutUs from '../Components/aboutUs';
import Program from '../Components/programs';
// import GetInvolved from '../Components/getInvolved';
import Donations from '../Components/donations';

function App() {
    return(
        <>
            <NavBar />
            <AboutUs />
            <Program/>
            {/* <GetInvolved /> */}
            <Donations />
        </>
    )
}

export default App;
