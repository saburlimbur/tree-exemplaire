/* eslint-disable no-unused-vars */
import React from "react";
import Headers from "./components/Fragments/Headers";
import CardMenu from "./components/Fragments/Cards";
import Footer from "./components/Fragments/Footer";
import SocialMedia from "./components/Elements/Sosmed";

const App = () => {
  return (
    <main className="relative flex flex-col min-h-screen items-center bg-transparent">
      <div className="flex flex-col justify-between h-full w-full mx-auto">
        <Headers />
        <div className="flex flex-col flex-grow justify-between w-full">
          <div className="relative z-10 w-full">
            <SocialMedia />
            <CardMenu />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
