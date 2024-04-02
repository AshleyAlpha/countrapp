import React from "react";

export const Header = () => {
  return (
    <div>
      <header
        class="h-64 flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th?id=OIP.DKGpFxTyo26Ily2XM5EfPgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="text-center px-4">
          <p class="text-white text-4xl font-bold mb-4">Country API App</p>
          <p class="text-black text-2xl">
            This is a simple app that allows you to search for countries and
            continents using the API.
          </p>
        </div>
      </header>
    </div>
  );
};
