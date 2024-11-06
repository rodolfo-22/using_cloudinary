# 🚀 Proyecto React + Vite

Este repositorio contiene una configuración inicial para un proyecto de **React** usando **Vite** como herramienta de desarrollo. Aquí encontrarás las instrucciones para clonar el proyecto, instalar dependencias y configurar enrutamiento y navegación. Además, se incluyen algunos estilos y recomendaciones para mejorar la apariencia visual.

---

## 📥 Clonar el Repositorio

Para empezar, clona el repositorio en tu máquina local con el siguiente comando:

```bash
git clone <URL-del-repositorio>
```

---

## 📦 Instalación de Dependencias

Una vez que hayas clonado el repositorio, navega hasta el directorio del proyecto y ejecuta:

```bash
npm install
```

Para iniciar el servidor de desarrollo, usa:

```bash
npm run dev
```

> **Nota**: Asegúrate de estar en el directorio raíz del proyecto antes de ejecutar los comandos.

---

## 🛠️ Importaciones Necesarias

Para habilitar el enrutamiento y manejar peticiones HTTP, instala las siguientes dependencias:

```bash
npm install react-router-dom 
npm install axios
npm install sweetalert2
```

---

## 🔧 Configuración en `main.js`

Para habilitar el enrutamiento en la aplicación, modifica el archivo `main.js` para agregar **ReactDOM** y el **BrowserRouter**. Esto es necesario para que `react-router-dom` funcione correctamente.

```javascript
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🔀 Uso de `useNavigate` para Navegación

Para agregar navegación en tu aplicación, utiliza el hook `useNavigate` de `react-router-dom`. A continuación, se muestra un ejemplo de cómo usar `useNavigate` en `App.js` para redirigir a un formulario.

```javascript
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/form')} className="navigate-button">
      Ir al Formulario
    </button>
  );
}
```

---

## 📂 Configuración de Variables de Entorno

Para poder subir imágenes a Cloudinary, necesitas configurar las variables de entorno en un archivo `.env` en la raíz del proyecto. Añade las siguientes líneas y reemplaza `<YOUR_CLOUD_NAME>` y `<YOUR_UPLOAD_PRESET>` con tus propias credenciales de Cloudinary:

```env
VITE_APP_CLOUDINARY_CLOUD_NAME=<YOUR_CLOUD_NAME>
VITE_APP_CLOUDINARY_UPLOAD_PRESET=<YOUR_UPLOAD_PRESET>
```


---

## 💡 Notas Finales

Este proyecto es solo el inicio. Siente la libertad de personalizar el código y explorar el potencial de **React** y **Vite** para construir aplicaciones web rápidas e interactivas.

---

¡Disfruta del desarrollo y diviértete explorando! 🚀
