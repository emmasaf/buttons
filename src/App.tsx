import React from 'react'
import './App.css'
import CustomButton from './widgets/buttons/CustomButton'

function App() {
  return (
    <div className="App">
      <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="primery"
        size="m"
      />

      <CustomButton
        disabled={false}
        text="Button"
        variant="secondary"
        size="s"
        loading={false}
      />
      <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="pseudo"
        size="xs"
      />

      <CustomButton
        loading={false}
        disabled={true}
        text="Button"
        variant="primery"
        size="m"
      />

      <CustomButton
        disabled={true}
        text="Button"
        variant="secondary"
        size="s"
        loading={false}
      />
      <CustomButton
        loading={false}
        disabled={true}
        text="Button"
        variant="pseudo"
        size="xs"
      />
           <CustomButton
        loading={true}
        disabled={false}
        text="Button"
        variant="primery"
        size="m"
      />

    </div>
  )
}

export default App
