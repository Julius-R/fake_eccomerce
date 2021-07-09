import React from "react";

export default function Product({ data }) {
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-contain object-center"
          src={data.image}
          alt={data.title}
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {data.category}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {data.title}
          </h1>
          <p class="leading-relaxed mb-3">{data.description}</p>
          <div class="flex items-center flex-wrap ">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Add to Cart
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <p class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
              ${data.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
