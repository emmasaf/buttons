import React, { useState } from 'react'
import './App.css'
import CustomButton from './widgets/buttons/CustomButton'
import { AddIcon } from '@chakra-ui/icons'
import CustomSwitch from './widgets/switch/CustomSwitch'

function App() {
  const [check, setCheck] = useState<boolean>(false)

  const handleCheck = (): void => {
    setCheck(p => !p)
  }
  return (
    <div className="App">
      <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="primery"
        size="m"
      />

      {/* <CustomButton
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
     <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="pseudo"
        size="s"
        left={true}
        icon={<AddIcon/>}
      />
           <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="secondary"
        size="m"
        left={false}
        icon={<AddIcon/>}
      />
                <CustomButton
        loading={false}
        disabled={false}
        text="Button"
        variant="secondary"
        size="xs"
        left={false}
        icon={<AddIcon/>}
      />

<CustomButton
        loading={true}
        disabled={false}
        text="Button"
        variant="secondary"
        size="xs"
        left={false}
        icon={<AddIcon/>}
      /> */}
      <CustomSwitch
        // disabled
        checked={check}
        onChange={handleCheck}
        variant="primery"
        width="48px"
        height="20px"
      />
            <CustomSwitch
        checked={check}
        onChange={handleCheck}
        variant="primery"
        width="48px"
        height="20px"
      />
            <CustomSwitch
        checked={check}
        onChange={handleCheck}
        variant="secondary"
        width="48px"
        height="20px"
      />
    </div>
  )
}

export default App
