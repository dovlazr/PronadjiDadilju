import React from "react";
import playground from "../assets/playground.png";

function Home() {
  return (
    <div className="bg-background_image_home lg:mt-32">
      <div className="px-4 lg:px-14 max-w-screen-lg mx-auto min-h-screen h-screen">
        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-8  w-full mx-auto  my-28 md:my-8 py-12 ">
          <div>
            <img src={playground} alt="playground" className="" />
          </div>
          <div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="font-theme-logo  text-7xl tracking-headerHome bg-gradient-to-r p-2 sm:p-5 md:p-5  from-blue-300 to-pink-300 text-transparent bg-clip-text">
                Pronađi Dadilju
              </h1>
              <p className="font-theme-logo font-[400] w-[509px]  tracking-paragraphHome mb-8 ">
                Uskoro ćemo ti predstaviti našu inovativnu platformu koja
                olakšava pronalaženje pouzdanih dadilja!
                <br />
                Unesi svoju e-mail adresu i budi deo promene u načinu na koji
                brinemo o najmlađima.
              </p>
              <input
                className="flex w-full bg-white text-[#8D8D8D] border border-[#D0D0D0] justify-start items-center   font-theme-logo rounded-2xl py-4 pl-4 pr-16 gap-2 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="Tvoj E-mail"
              ></input>
              <button className="flex w-full btn-primary tracking-buttonHome mt-4">
                Prijavi se na listu čekanja
              </button>
              <p className=" w-[509px] font-theme-logo font-normal text-neutral-400 text-xs leading-3 mt-5">
                *PS Obećavamo da ti nećemo slati gomilu nepotrebnih mejlova!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
