import background from "../images/background.svg";
import text from "../images/pronadji-dadilju.svg";
import playground from "../images/playground.svg";

function Hero() {
  return (
    <div className="relative flex overflow-hidden justify-center h-screen ">
      <img
        src={background}
        alt="background-image"
        width="1280"
        height="665"
        className="absolute top-20 object-cover"
      />

      <div className="relative flex items-center justify-center gap-3 w-55rem h-23rem border-4 top-36 left-21">
        <img
          src={text}
          alt="name-of-platform"
          className=" absolute top-0 left-0 border-2 ml-1 mt-4"
        />
        <p className=" relative border-4 font-theme-f1 text-base top-12 right-2 w-509px mb-24 md:m-2">
          Uskoro ćemo ti predstaviti našu inovativnu platformu koja olakšava
          pronalaženje pouzdanih dadilja!
          <p className="mt-3">
            Unesi svoju e-mail adresu i budi deo promene u načinu na koji
            brinemo o najmlađima.
          </p>
        </p>
        <input type="email" id="email" placeholder="Tvoj E-mail" className=" absolute flex border  sm:w-60  start-1 bg-blue-500  border-gray-300 text-white px-4 py-2 rounded-2xl bottom-3" required/>
        <button className=" rounded-2xl border bg-blue-400 text-white px-4 py-2">Prijavi se na listu čekanja!</button>
        <div className="w-full md:w-1/2">
          <img src={playground} alt="playground photo" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
