import React, { useState } from 'react';
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"

function Stats() {

  const [formObject, setFormObject] = useState({
    weight: "",
    leanBodyMass: "",
  })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
      API.saveStats({
        weight: formObject.weight,
        leanBodyMass: formObject.leanBodyMass,
      })
        .then(() => setFormObject({
          weight: "",
          leanBodyMass: ""
        }))
        .then(console.log(formObject))
        .catch(err => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputWeight" className="sr-only">Weight</label>
            <input onChange={handleInputChange} name="weight" value={formObject.weight} className="form-control" id="weight" placeholder="Weight" />
          </div>
          <button onClick={handleFormSubmit} type="submit" className="btn btn-primary mb-2">Record</button>
        </form>

        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputLeanBodyMass" className="sr-only">Lean Body Mass</label>
            <input onChange={handleInputChange} name="leanBodyMass" value={formObject.leanBodyMass} className="form-control" id="leanBodyMass" placeholder="Lean Body Mass" />
          </div>
          <button onClick={handleFormSubmit} type="submit" className="btn btn-primary mb-2">Record</button>
        </form>

      </Wrapper>
      <Footer />
    </div>
  );
}

export default Stats;