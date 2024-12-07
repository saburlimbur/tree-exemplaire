const Headers = () => {
  return (
    <header className="relative w-full">
      <div className="relative bg-[url('/Headers-Background.png')] bg-cover bg-center h-60 sm:h-72 lg:h-96 flex flex-col justify-center items-center text-center pt-36 pb-28">
        {/* Profil */}
        <div className="mt-4">
          <img
            src="/Profile.png"
            alt="Profile"
            className="w-32 h-32 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white"
          />
        </div>

        {/* Teks */}
        <div>
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white">
            EXEMPLAIRE OFFICIAL
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Headers;
