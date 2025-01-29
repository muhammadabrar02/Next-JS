"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm w-full transition transform hover:scale-105 hover:shadow-xl">
        <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxvpBP2jlZQpUbgy4k3quPyTLRU2L5Rq93-oYhrDE7tS6XEQCJ0Ez5ZHhSPs5iaForYg&usqp=CAU"
            alt="hello"
            width={400}
            height={300}
            className="rounded-t-xl object-cover w-full h-full"
            priority
          />
        </div>
        <div className="mt-4 flex flex-col text-center">
          <h2 className="text-xl font-semibold text-gray-800">Chair</h2>
          <p className="text-gray-600 mt-1">Chair</p>
          <button
            className={`mt-4 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-white font-medium transition ${
              added ? "bg-green-500" : "bg-pink-500 hover:bg-pink-700"
            }`}
            onClick={handleAddToCart}
            disabled={added}
          >
            <ShoppingCart size={18} /> {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;