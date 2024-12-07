/* eslint-disable no-unused-vars */
import React from "react";
import Headers from "./components/Fragments/Headers";
import CardMenu from "./components/Fragments/Cards";
import Footer from "./components/Fragments/Footer";
import SocialMedia from "./components/Elements/Sosmed";

const App = () => {
  return (
    <main className="relative flex flex-col h-screen items-center bg-[url('/Background-App.png')] bg-cover mx-auto">
      <div className="flex flex-col justify-between h-full w-full">
        <Headers />
        <div className="relative z-10 w-full">
          <SocialMedia />
          <CardMenu />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
