import React from "react";
import playground from "../assets/playground.png";

function Home() {
  return (
    <div className="relative">
      <div className="bg-background_image_home fixed top-0 left-0 h-screen w-screen bg-no-repeat bg-cover [background-position-y:90px]"></div>

      {/* md:pr-[377px] is because image width is 369px and gap is 8px */}
      <div className="relative flex flex-col items-start justify-between md:w-[876px] gap-8 p-6 md:p-0 md:mx-auto md:pr-[377px] md:mt-[100px]">
        <h1 className="text-7xl font-black tracking-headerHome bg-gradient-to-r from-blue-300 to-pink-300 text-transparent bg-clip-text pb-3">
          Pronađi Dadilju
        </h1>

        <img
          src={playground}
          alt="playground"
          className="h-[163px] w-full object-cover md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:h-[369px] md:w-[369px]"
        />

        <p className=" font-[400] tracking-paragraphHome">
          Uskoro ćemo ti predstaviti našu inovativnu platformu koja olakšava
          pronalaženje pouzdanih dadilja!
          <br />
          Unesi svoju e-mail adresu i budi deo promene u načinu na koji brinemo
          o najmlađima.
        </p>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <input
            className="w-full bg-white text-[#8D8D8D] border border-[#D0D0D0] rounded-2xl focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="Tvoj E-mail"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl">
            Prijavi se na listu čekanja
          </button>
        </div>

        <p className="font-normal text-neutral-400 text-xs leading-3">
          *PS Obećavamo da ti nećemo slati gomilu nepotrebnih mejlova!
        </p>
      </div>
    </div>
  );
}

export default Home;
