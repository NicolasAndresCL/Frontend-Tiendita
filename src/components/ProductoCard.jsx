import React from 'react';

const ProductoCard = ({ producto }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
      <img
        src={producto.image}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{producto.nombre}</h3>
      <p className="text-gray-600">💲 Precio: ${producto.precio}</p>
      <p className="text-sm text-gray-500">🧮 Stock: {producto.stock}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductoCard;
