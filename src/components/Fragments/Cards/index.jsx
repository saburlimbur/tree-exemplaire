const CardMenu = () => {
  const menuItems = [
    {
      id: 1,
      src: "/ic_sharp-tiktok.svg",
      label: "Tiktok",
    },
    {
      id: 2,
      src: "/simple-icons_shopee.svg",
      label: "Shopee",
    },
    { id: 3, src: "/ri_instagram-fill.svg", label: "Instagram" },
    { id: 4, src: "/ant-design_whats-app-outlined.svg", label: "WhatsApp" },
  ];

  return (
    <section className="w-full py-20 sm:p-6 flex justify-center items-center flex-col gap-5 px-3">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-black rounded-lg justify-between py-3 px-4 w-full max-w-md"
        >
          <div></div>
          <div className="flex items-center gap-2">
            <img src={item.src} alt={item.label} />
            <h1 className="text-base sm:text-lg lg:text-xl text-white">
              {item.label}
            </h1>
          </div>
          <div></div>
        </div>
      ))}
    </section>
  );
};

export default CardMenu;
