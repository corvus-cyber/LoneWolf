import React, { useState } from 'react';
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsContainer from "../components/StatsContainer/StatsContainer"
import { useAuth0 } from '@auth0/auth0-react';
import "../components/Wrapper/login.css"



function Stats() {
  const {user} = useAuth0();

  // console.log(user);

  const [formObject, setFormObject] = useState({
    weight: null,
    leanBodyMass: null,
    token: "",
    date: null
  })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.weight || formObject.leanBodyMass) {
      API.saveStats({
        weight: parseInt(formObject.weight),
        leanBodyMass: parseInt(formObject.leanBodyMass),
        token: user.sub,
        date: new Date()
      })
        .then(() => setFormObject({
          weight: "",
          leanBodyMass: ""
        }))
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
      <StatsContainer>
        <div className="row justify-content-md-center">
        <form className="form-inline mt-5 mb-2">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputWeight" className="sr-only">Weight</label>
            <input onChange={handleInputChange} name="weight" value={formObject.weight} className="form-control" id="weight" placeholder="Enter Weight (Lbs)" />
          </div>
          <button onClick={handleFormSubmit} type="submit" className="btn-enterStats btn-sm mb-2">Record</button>
        </form>
        </div>
        <div className="row justify-content-md-center">
        <form className="form-inline mb-5">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputLeanBodyMass" className="sr-only">Lean Body Mass</label>
            <input onChange={handleInputChange} name="leanBodyMass" value={formObject.leanBodyMass} className="form-control" id="leanBodyMass" placeholder="Enter Lean Body Mass (Lbs)" />
          </div>
          <button onClick={handleFormSubmit} type="submit" className="btn-enterStats btn-sm mb-2">Record</button>
        </form>
        </div>
        </StatsContainer>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Stats;