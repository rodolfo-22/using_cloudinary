import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useImageStore from "../hooks/useImageStore";
import Swal from "sweetalert2";

const AddImageForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]); // Archivos seleccionados para imágenes
  const navigate = useNavigate();
  const { uploadImages, loading, error: imageError } = useImageStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir las imágenes seleccionadas a Cloudinary y obtener las URLs
    const uploadedUrls = await uploadImages(selectedFiles);
    console.log("uploadedUrls", uploadedUrls);

    if (imageError || !uploadedUrls.length) {
      Swal.fire("Error", imageError || "Error al subir las imágenes", "error");
      return;
    }

    Swal.fire("Éxito", "Imágenes subidas correctamente", "success");

    // Opcional: limpiar campos
    setSelectedFiles([]);

    navigate("/"); // Redirige a la página principal o a donde desees
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files)); // Guardar los archivos seleccionados como un array
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Subir Imágenes</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Imágenes</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Subiendo imágenes..." : "Subir Imágenes"}
        </button>
      </form>
    </div>
  );
};

export default AddImageForm;
