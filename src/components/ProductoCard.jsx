import React from 'react';

const ProductoCard = ({ producto, token, onRequireLogin }) => {
  const handleAddToCart = () => {
    if (!token) {
      onRequireLogin();
      return;
    }
    // Aquí iría la lógica para agregar al carrito si está autenticado
    alert('Producto agregado al carrito (simulado)');
  };

  return (
    <div className="bg-rose-100 rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center outline-solid outline-pink-300">
      <div className="flex justify-center items-center bg-violet-100 h-48 w-full rounded-md overflow-hidden mb-4">
        <img
          src={producto.image}
          alt={producto.nombre}
          className="h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800 text-center mb-2 tracking-tight">
        🧸 {producto.nombre}
      </h3>
      <h4 className="text-lg font-bold text-green-800 text-center mb-2 tracking-tight">
        🏷️ {producto.descripcion}
      </h4>
      <p className="text-lg font-semibold text-pink-700 text-center">💲 Precio: ${producto.precio}</p>
      <p className="text-sm text-gray-600 text-center">🧮 Stock: {producto.stock}</p>

      <button 
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow"
        onClick={handleAddToCart}
      >
        🛒 Agregar al carrito
      </button>
    </div>
  );
};

export default ProductoCard;
