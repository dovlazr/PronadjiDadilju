import background from "../images/background.svg";
import playground from "../images/playground.svg";

function NewHero() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen mt-14 md:mt-6 overflow-hidden overflow-y-auto lg:overflow-y-hidden relative">
        {/* Left Column */}
        <div className="lg:w-1/2 lg:h-full lg:top-0 lg:left-7 lg:p-8 lg:absolute flex flex-col justify-center lg:pr-8">
          <div className="lg:w-265 lg:h-144 lg:text-5xl lg:leading-tight lg:tracking-wide lg:font-semibold mb-8">
            <h1 className="text-5xl leading-tight tracking-wide inline-block  bg-gradient-to-r  from-header-text1 to-header-text2 font-theme-f1  ">
                          Pronađi <br />
                          <span>Dadilju</span>
            </h1>
          </div>
          <div className="lg:text-lg font-normal font-theme-f1 lg:text-16 lg:leading-16 lg:tracking-wide">
            <p>
              Uskoro ćemo ti predstaviti našu inovativnu platformu koja olakšava
              pronalaženje pouzdanih dadilja!
            </p>
            <br />
            <p>
              Unesi svoju e-mail adresu i budi deo promene u načinu na koji
              brinemo o najmlađima.
            </p>
          </div>

          {/* Input and Button */}
          <div className="lg:flex mt-9">
            <input
              type="text"
              placeholder="Tvoj E-mail"
              className="lg:block text-input-color rounded-lg border border-gray-300 px-4 py-2 mr-2 w-64"
            />
            <button type="button" className="lg:block bg-button-color text-button  rounded-lg border border-gray-300 bg-gray-300 px-4 py-2">
              Prijavi se na listu čekanja
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 lg:h-full lg:top-0 lg:right-5 lg:p-8 lg:absolute flex justify-center items-center">
          <img
            src={playground}
            alt="Playground image"
            className="w-80 h-80 lg:w-80 lg:h-80"
          />
        </div>
      </div>
      {/* Other content or components can go here */}
    </div>
  );
}

export default NewHero;
