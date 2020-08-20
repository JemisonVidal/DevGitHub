import React from 'react';
import Context from './Context';

const StoreProvider = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  return (
    <Context.Provider value={{ dados, setDados }}>
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;
