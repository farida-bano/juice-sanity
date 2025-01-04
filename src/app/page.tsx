"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define a type for Juice
interface Juice {
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: string;
  image: {
    asset: {
      url: string;
    };
  };
  discount?: string;
  stockQuantity: number;
  CODAvailability: boolean;
  buyNow: boolean;
  addToCart: boolean;
  wishlist: boolean;
}

const JuicePage = () => {
  const [juice, setJuice] = useState<Juice | null>(null);

  useEffect(() => {
    const fetchJuiceData = async () => {
      const data = await client.fetch(
        `*[_type == "juice"][0]{
          title,
          description,
          price,
          rating,
          reviews,
          image {
            asset-> {
              url
            }
          },
          discount,
          stockQuantity,
          CODAvailability,
          buyNow,
          addToCart,
          wishlist
        }`
      );
      setJuice(data);
    };

    fetchJuiceData();
  }, []);

  if (!juice) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Juice Image */}
          {juice.image?.asset?.url && (
            <div className="relative w-full h-80 sm:h-96 md:h-112 overflow-hidden rounded-lg border-4 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <Image
                src={juice.image.asset.url}
                alt={juice.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </div>
          )}

          {/* Juice Details */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Juice Title */}
            <h1 className="text-3xl sm:text-4xl font-semibold text-center md:text-left hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              {juice.title}
            </h1>

            {/* Juice Rating */}
            <p className="text-lg text-gray-600">Rating: {juice.rating}</p>

            {/* Juice Description */}
            <p className="text-gray-800">{juice.description}</p>

            {/* Price and Discount */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <p className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300">
                {juice.price}
              </p>
              {juice.discount && (
                <p className="text-xl text-red-600 line-through">{juice.discount}</p>
              )}
            </div>

            {/* Stock Quantity */}
            <p className="text-gray-600">Stock: {juice.stockQuantity}</p>

            {/* Cash on Delivery Availability */}
            <p
              className={`font-medium ${
                juice.CODAvailability ? "text-green-600" : "text-red-600"
              }`}
            >
              {juice.CODAvailability ? "Available for COD" : "COD Not Available"}
            </p>

            {/* Reviews */}
            <div>
              <h3 className="text-lg font-medium">Reviews</h3>
              <p className="text-gray-600">{juice.reviews}</p>
            </div>

            {/* Buy Now and Add to Cart */}
            <div className="flex justify-center space-x-4">
              {juice.buyNow && (
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Buy Now
                </button>
              )}
              {juice.addToCart && (
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                  Add to Cart
                </button>
              )}
              {juice.wishlist && (
                <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300">
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuicePage;
