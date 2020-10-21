import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"

function Stats() {

  return (
    <div>
      <Navbar />
      <Wrapper>
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputWeight" className="sr-only">Weight</label>
            <input className="form-control" id="weight" placeholder="Weight" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Record</button>
        </form>

        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputLeanBodyMass" className="sr-only">Lean Body Mass</label>
            <input className="form-control" id="leanBodyMass" placeholder="Lean Body Mass" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Record</button>
        </form>

      </Wrapper>
      <Footer />
    </div>
  );
}

export default Stats;