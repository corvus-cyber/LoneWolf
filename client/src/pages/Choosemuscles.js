import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import Musclecard from "../components/Musclecard/Musclecard copy"
function Muscles() {
  
    return (
      <div>
        <Navbar /> 
        <Wrapper>
            <Musclecard/>
           
        </Wrapper>
        <Footer />
      </div>
    );
  }
  
  export default Muscles;