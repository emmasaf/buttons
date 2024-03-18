import React from 'react'
import './App.css'
import CustomButton from './widgets/buttons/CustomButton'

function App() {
  return (
    <div className="App">
      <CustomButton disabled={false} text="Button" variant="primery" size="m" />

      <CustomButton
        disabled={false}
        text="Button"
        variant="secondary"
        size="s"
      />
      <CustomButton disabled={false} text="Button" variant="pseudo" size="xs" />

      <CustomButton disabled={true} text="Button" variant="primery" size="m" />

      <CustomButton
        disabled={true}
        text="Button"
        variant="secondary"
        size="s"
      />
      <CustomButton disabled={true} text="Button" variant="pseudo" size="xs" />
    </div>
  )
}

export default App
