import { useState } from 'react'
import './BmiCalculator.css'

function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  // Calculate BMI when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault()
    const heightInMeters = parseFloat(height) / 100
    const weightInKg = parseFloat(weight)

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2)
      setBmi(calculatedBmi)
    } else {
      setBmi(null)
    }
  }

  return (
    <div className="bmi-calculator">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="bmi-result">
          Your BMI is: <strong>{bmi}</strong>
        </div>
      )}
    </div>
  )
}

export default BmiCalculator