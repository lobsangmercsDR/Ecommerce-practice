const Card = (data) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        {/* Contenedor de la Imagen */}
        <div className="relative w-full h-full rounded-lg">
          {/* Etiqueta de Categoría */}
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-blue-600 text-xs m-2">
            {data.data.category.name}
          </span>
          {/* Imagen */}
          <img
            className="hover:opacity-4 w-full h-full object-cover rounded-lg"
            src={data.data.images}
            alt="headphones"
          />
        </div>
        {/* Botón de Agregar */}
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          +
        </div>
      </figure>
      {/* Información del Producto */}
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-bold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
