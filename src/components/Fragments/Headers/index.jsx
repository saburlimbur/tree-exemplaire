const Headers = () => {
  return (
    <header className="relative w-full headers">
      <div className="relative flex flex-col justify-center items-center text-center py-14">
        {/* Profil */}
        <div className="mt-4">
          <img
            src="/Exemplaire-Logo.png"
            alt="Profile"
            className="w-32 h-32 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white"
          />
        </div>

        {/* Teks */}
        <div className="py-3">
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white">
            EXEMPLAIRE OFFICIAL
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-300">
            Contact information and purchase link are below
          </p>
        </div>
      </div>
    </header>
  );
};

export default Headers;
