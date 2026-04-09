# 🚀 Tarea Corta 3 - React Native

Aplicación móvil desarrollada con **React Native + Expo** que consume una API REST y muestra los datos en una lista.

---

## 📱 Descripción

Esta aplicación se conecta a una API pública, obtiene información en formato JSON y la muestra en pantalla utilizando el componente `FlatList`.

El objetivo es demostrar el consumo de servicios REST en una aplicación móvil híbrida.

---

## ⚙️ Tecnologías utilizadas

- React Native  
- Expo  
- JavaScript  
- Fetch API  

---

## 🔗 API utilizada
https://tiusr13pl.cuc-carrera-ti.ac.cr/MicroPersonas/api/Persona


---

## 🧠 ¿Cómo funciona?

1. La aplicación inicia con Expo  
2. Se ejecuta automáticamente el hook `useEffect`  
3. Se realiza una solicitud a la API (`fetch`)  
4. Se reciben los datos en formato JSON  
5. Se procesan los datos  
6. Se muestran en pantalla usando `FlatList`  

---

## ▶️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/jesgc96/LosIkkiDeFenix_TareaCorta3.git
cd LosIkkiDeFenix_TareaCorta3

2. Instalar dependencias
npm install

3. Ejecutar el proyecto
npx expo start

4. Abrir la app
Escanear el QR con Expo Go (celular)
O abrir en navegador

📸 Evidencia

La aplicación muestra:

Lista de personas
Nombre
Tipo
Género

📂 Estructura del proyecto
/assets        → Recursos (imágenes, íconos)
/context       → Manejo de estado global (API y datos)
/App.js        → Componente principal
/index.js      → Punto de entrada
/package.json  → Configuración del proyecto

⚠️ Nota

Si la aplicación se ejecuta en navegador puede presentar errores de CORS.
Se recomienda utilizar Expo Go en el celular para su correcto funcionamiento.

👨‍💻 Autores

Proyecto desarrollado por el grupo:

Los Ikki de Fénix

✅ Estado
✔ Aplicación funcional
✔ Consumo de API REST
✔ Visualización de datos
