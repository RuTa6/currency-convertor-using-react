import React, {useState} from 'react';
import './App.css';



 
const App = () => {
  const [inputs, setInputs] = useState({});
  const handleInputChange = (event) => { // to get the input value
    // event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value})); 
    //update the inputs state variable with the user’s input.

  }
  const [choice,setOption]=useState({});
  const handleOptionChange=(ev)=>{ // to handle the option change
    setOption(ev.currentTarget.value)
  }
  const rates = {
    usd: 180,
    eur: 220,
    inr: 2.5
  }

  return (
    <div className="container">
      <div className="title">
        Currency Convertor 
      </div>
      <br></br>
      <label>SriLankan Rupees: </label>
      <input 
        type="number" 
        name="txtslrs"
        id="txtslrs"
        required
        onChange={handleInputChange}
        value={inputs.txtslrs}>
      </input>
      <br></br>
      <label>Choose a Currency Type: &nbsp;</label>
      <select 
        className="select"
        value={choice}
        onChange={handleOptionChange}>
          <option>select one</option> 
          {Object.keys(rates).map((currency) => { // get keys from rates nd when options change call handleOptionChange function
          return ( // set the values for options
            <option className="option" value={rates[currency]}>{currency}</option>
                  )
            })
          }
      </select>
      <br></br>
      <input 
          type="number"
          name="convertedrs"
          id="convertedrs"
          value={(choice)*(inputs.txtslrs)} // set the value as converted value
          readOnly>    
      </input>
      <br></br>
</div>
  );
    }
  
    export default App;
