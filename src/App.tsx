import React, { useState } from 'react';
import Button from './components/button';
import Checkbox, { useCheckboxStore } from './components/checkbox';

export default function App() {
  const checkbox = useCheckboxStore();

  // checkbox.useState((value) => {
  //   return value;
  // });

  // const [store, setStore] = useState({});

  return (
    <React.Fragment>
      <Button
        role='checkbox'
        onClick={() => {
          checkbox.setStore((prev) => ({ ...prev, value: !prev.value }));
        }}>
        Click me
      </Button>
      <label>
        <Checkbox store={checkbox} />I agree to the terms and conditions
      </label>
      {/* <Checkbox render={<button type='button' />}>Btn checkbox</Checkbox> */}
    </React.Fragment>
  );
}
