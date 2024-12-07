/* eslint-disable no-unused-vars */
import { ArrowUpRight } from "lucide-react";

const CardMenu = () => {
  const menuItems = [
    { id: 1, src: "/ant-design_whats-app-outlined.svg", label: "WhatsApp" },
    {
      id: 2,
      src: "/simple-icons_shopee.svg",
      label: "Shopee",
    },
    { id: 3, src: "/ri_instagram-fill.svg", label: "Instagram" },
    {
      id: 4,
      src: "/ic_sharp-tiktok.svg",
      label: "Tiktok",
    },
  ];

  return (
    <section className="w-full py-10 sm:p-6 flex justify-center items-center flex-col gap-5 px-3">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-black rounded-lg justify-between py-3 px-4 w-full max-w-md"
        >
          <div></div>
          <div className="flex items-center text-center justify-between">
            <div className="flex gap-2 items-center text-center">
              <img
                src={item.src}
                alt={item.label}
                className="h-6 w-6 sm:w-10 sm:h-10 lg:w-8 lg:h-8"
              />
              <h1 className="text-xs sm:text-lg lg:text-xl text-white">
                {item.label}
              </h1>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </section>
  );
};

export default CardMenu;
