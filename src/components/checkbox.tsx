import React, { useEffect } from 'react';

interface Store {
  store: {
    value: boolean;
    defaultChecked?: boolean;
  };
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

interface CheckboxProps {
  store?: Store;
  render?: JSX.Element;
  children?: React.ReactNode;
  defaultChecked?: boolean;
}

export const CheckboxContext = React.createContext<Store>({
  value: false,
});

export function useCheckboxStore(): Store {
  const [store, setStore] = React.useState<Store>();

  // useEffect(() => {
  //   console.log('ES', { store });
  // }, [store]);

  // store.useState = setStore;

  return { store, setStore };
}

function Checkbox({
  defaultChecked,
  render,
  children,
  store: _store,
}: CheckboxProps) {
  if (render) {
    const Render = render.type;
    return (
      <Render role='checkbox' {...render.props}>
        {children}
      </Render>
    );
  }

  const { store, setStore } = useCheckboxStore();

  useEffect(() => {
    setStore((prev) => ({ ...prev, ..._store }));
  }, [_store]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStore((prev) => ({ ...prev, value: event.target.checked }));
  }

  return (
    <CheckboxContext.Provider value={store}>
      <input
        type='checkbox'
        checked={store.value}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
    </CheckboxContext.Provider>
  );
}

export default Checkbox;
