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
          <p className=" relative border-4 font-theme-f1 text-base left-0 top-10  w-509px mb-24 md:m-2">
            Uskoro ćemo ti predstaviti našu inovativnu platformu koja olakšava
            pronalaženje pouzdanih dadilja!
            <p className="mt-3">
              Unesi svoju e-mail adresu i budi deo promene u načinu na koji
              brinemo o najmlađima.
            </p>
          </p>
        
        <div className="w-1/2  "> 
          <img src={playground} className="ml-3  " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
