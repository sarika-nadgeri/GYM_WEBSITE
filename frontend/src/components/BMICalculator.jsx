import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = (e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please enter valid Height,Weight and Gender");
      return;
    }

    const heightInMeters = height/100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if(bmiValue < 18.5){
      toast.warning("Your are under weight,Consider seeking from a healthcare provider");
    }else if (bmiValue >= 18.5 && bmiValue < 24.9){
      toast.success("Your have normal weight,keep maintaning a healthy lifestyle");
    }else if(bmiValue >= 25 && bmiValue < 29.9){
      toast.warning("Your are over weight,Consider seeking from a healthcare provider");
    }else{
      toast.error("Your in the obese range. It is recommended to seek advice from a healthcare specialist");
    }
  }
  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBmi}>
            <div>
              <label>Height (cm)</label>
              <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} required/>
            </div>
            <div>
              <label>Weight (kg)</label>
              <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} required/>
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img alt='' src='/bmi.jpg'></img>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator