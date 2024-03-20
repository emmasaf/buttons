import React, { useState } from 'react'
import './App.css'
import CustomButton from './widgets/buttons/CustomButton'
import { AddIcon } from '@chakra-ui/icons'
import CustomSwitch from './widgets/switch/CustomSwitch'
import CustomCheckbox from './widgets/checkbox/CustomCheckbox'

function App() {
  const [check, setCheck] = useState<boolean>(false)
  const [check2, setCheck2] = useState<boolean>(false)
  const [check3, setCheck3] = useState<boolean>(false)

  const handleCheck = (): void => {
    setCheck(p => !p)
  }

  const handleCheck2 = (): void => {
    setCheck2(p => !p)
  }

  const handleCheck3 = (): void => {
    setCheck3(p => !p)
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
        checked={check}
        onChange={handleCheck}
        variant="secondary"
      />

      <CustomSwitch
        checked={check2}
        onChange={handleCheck2}
        variant="primery"
      />
      <CustomCheckbox
        error={true}
        variant="primery"
        checked={check3}
        onChange={handleCheck3}
        state="selected"
      />
      <CustomCheckbox
        // isDisabled
        disabled
        variant="secondary"
        checked={check3}
        onChange={handleCheck3}
        state="indeterminate"
      />
      <CustomCheckbox
        variant="secondary"
        checked={check3}
        onChange={handleCheck3}
        state="indeterminate"
      />
    </div>
  )
}

export default App
