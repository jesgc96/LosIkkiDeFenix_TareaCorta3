import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [datos, setDatos] = useState([
    { id: '1', campo1: 'Dato A', campo2: 'Valor X', campo3: 'Info 1' },
    { id: '2', campo1: 'Dato B', campo2: 'Valor Y', campo3: 'Info 2' },
    { id: '3', campo1: 'Dato C', campo2: 'Valor Z', campo3: 'Info 3' },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga (luego Persona 4 mete API)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={{ datos, setDatos, loading }}>
      {children}
    </AppContext.Provider>
  );
};