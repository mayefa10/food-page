import React from 'react';

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/75">
      <div className="text-center">
        <img
          src="/pizza.jpg"
          alt=""
          className="max-h-24 max-w-auto bloc mx-auto"
        />
      </div>

      <h4 className="font-semibold my-2 text-xl">Peperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos modi
        maxime!
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
