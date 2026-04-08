import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Consumo de la API Pública de MicroPersonas (Responsabilidad de Persona 4)
    const fetchData = async () => {
      try {
        const response = await fetch('https://tiusr13pl.cuc-carrera-ti.ac.cr/MicroPersonas/api/Persona');
        const json = await response.json();
        
        // Mapeo de datos para que calcen con la interfaz de la Persona 2
        const datosMapeados = json.map(persona => ({
          id: persona.personaId.toString(),
          campo1: persona.nombre,
          campo2: "Tipo: " + persona.tipo,
          campo3: "Género: " + persona.gender
        }));

        setDatos(datosMapeados);
      } catch (error) {
        console.error("Error fetching data: ", error);
        
        // Si hay error en la conexión (como el bloqueo CORS del navegador Web), mandamos una tarjeta de advertencia
        setDatos([{
          id: 'error-999',
          campo1: '¡Error de conexión! (CORS)',
          campo2: 'Intenta probarlo en tu celular',
          campo3: 'con la App de Expo Go'
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ datos, setDatos, loading }}>
      {children}
    </AppContext.Provider>
  );
};