/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialLogos = [
    {
      name: "Facebook",
      logo: "/ri_instagram-fill.svg",
      link: "https://www.instagram.com/exemplaireofficial?igsh=MWZ0MXlqanZuaDBqZw==",
    },
    {
      name: "Tiktok",
      logo: "/ic_sharp-tiktok.svg",
      link: "https://www.tiktok.com/@exemplaireofficial?_t=ZS-8rle5U1886k&_r=1",
    },
    {
      name: "Shopee",
      logo: "/simple-icons_shopee.svg",
      link: "https://id.shp.ee/Tvr1Wfx",
    },
    {
      name: "Whatsapp",
      logo: "/ant-design_whats-app-outlined.svg",
      link: "https://wa.me/6288210536805",
    },
  ];
  return (
    <div className="flex gap-5 items-center justify-center pt-36">
      {socialLogos.map((item) => (
        <div key={item.name}>
          <Link to={item.link} target="_blank">
            <img src={item.logo} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
