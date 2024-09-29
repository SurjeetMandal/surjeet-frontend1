import logo1 from "../assets/Logo 1.svg";
import logo2 from "../assets/Logo 3.svg";
import logo3 from "../assets/Logo 4.svg";
import logo4 from "../assets/Logo 5.svg";
import logo5 from "../assets/Logo 2.svg";
import dasboard from "../assets/Dashboard image.svg";
import bicon1 from "../assets/b-icon.svg";
import bicon2 from "../assets/b-icon2.svg";
import bicon3 from "../assets/b-icon3.svg";
import img5 from "../assets/Image.svg";
import img10 from "../assets/Image10.svg";
import img11 from "../assets/Image11.svg"
import pro10 from '../assets/Pro10.svg';
import pro11 from '../assets/Pro11.svg';
import pro12 from '../assets/Pro12.svg';
import pro13 from '../assets/Pro13.svg';
import pro14 from '../assets/Pro14.svg';
import pro15 from '../assets/Pro15.svg';


const Product = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-indigo-50 via-green-50 to-white">
        <div className="flex justify-between flex-col lg:flex-row Container gap-5">
          <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
            <p className="sm:text-5xl lg:text-left text-2xl font-bold mt-8 md:mt-0 text-center">
              Grow your Sales and <br /> Services
            </p>
            <p className="text-zinc-500 mt-8 mb-5 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
            <div className="flex gap-4">
              <button className="rounded-md py-2.5 sm:py-3 px-5 bg-black text-white sm:text-[15px] text-[13px] min-w-24 max-w-32">
                Get Started
              </button>
              <button className="rounded-md py-2.5 sm:py-3 px-5 bg-transparent text-black border-slate-300 border sm:text-[15px] text-[13px] min-w-24 max-w-32">
                Contact Us
              </button>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <img className="w-[550px] mb-20" src={dasboard} alt="png" />
          </div>
        </div>

        <div className="pb-10">
          <div className="flex flex-wrap md:mt-16 md:justify-between justify-evenly gap-10 Container">
            <img className="h-7 md:h-10" src={logo1} alt="" />
            <img className="h-7 md:h-10" src={logo2} alt="" />
            <img className="h-7 md:h-10" src={logo3} alt="" />
            <img className="h-7 md:h-10" src={logo4} alt="" />
            <img className="h-7 md:h-10" src={logo5} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-indigo-100 to-violet-100 w-full flex flex-col justify-center">
        <p className="sm:text-5xl text-center text-2xl font-semibold pt-32">
          Get the best out of your company <br />
          with our service
        </p>

        <div className="flex flex-col md:pr-16 pr-5">
          <div className="box_container w-full bg-purple-50 rounded-tr-3xl px-8 py-12 mt-16 flex flex-wrap gap-10 justify-evenly">
            <div className="box max-w-80">
              <img src={pro10} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
                Security and privacy
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>

            <div className="box max-w-80">
              <img src={pro11} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
                Built-in AI features
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>

            <div className="box max-w-80">
              <img src={pro12} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
                Collaborate with others
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>

          <div className="box_container w-full bg-purple-50 px-8 pb-10 flex flex-wrap gap-10 justify-evenly">
            <div className="box max-w-80">
              <img src={pro13} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
               Real time sync
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>

            <div className="box max-w-80">
              <img src={pro14} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
                Built-in AI features
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>

            <div className="box max-w-80">
              <img src={pro15} alt="" />
              <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
                Easy notes organization
              </p>
              <p className="text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-28 bg-gradient-to-t from-green-50">
        <div className="flex justify-between flex-col lg:flex-row Container">
          <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              <p className="md:text-xl text-[20px] font-semibold tracking-tighter md:mb-5 mb-0">
                Marketing insightt
              </p>
            </div>
            <p className="sm:text-5xl lg:text-left text-2xl font-semibold mt-8 md:mt-0 text-center">
              Data-driven client feedback
            </p>
            <p className="text-zinc-500 md:mt-8 mt-2 mb-5 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>

          <div className="md:mt-16 mt-10 flex items-center justify-center w-full lg:w-6/12">
            <img className="w-[400px] mb-20" src={img10} alt="png" />
          </div>
        </div>
      </div>


      <div className="md:pt-28  bg-gradient-to-b from-green-50">
        <div className="flex justify-between flex-col-reverse lg:flex-row Container">
          <div className="mt-16 flex items-center justify-center w-full lg:w-6/12">
            <img className="w-[400px] mb-20" src={img11} alt="png" />
          </div>

          <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              <p className="md:text-xl text-[20px] font-semibold tracking-tighter md:mb-5 mt-0">
                Marketing insights
              </p>
            </div>
            <p className="sm:text-5xl lg:text-left text-2xl font-semibold mt-8 md:mt-0 text-center">
              Data-driven client feedback
            </p>
            <p className="text-zinc-500 md:mt-8 mt-2 mb-5 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>
      </div>


      <div className="md:pt-28 bg-gradient-to-t from-green-50 via-indigo-50 to-white">
        <div className="flex justify-between flex-col lg:flex-row Container">
          <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              <p className="md:text-xl text-[20px] font-semibold tracking-tighter md:mb-5 mb-0">
                Marketing insightt
              </p>
            </div>
            <p className="sm:text-5xl lg:text-left text-2xl font-semibold mt-8 md:mt-0 text-center">
              Data-driven client feedback
            </p>
            <p className="text-zinc-500 md:mt-8 mt-2 mb-5 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-center w-full lg:w-6/12">
            <img className="w-[400px] mb-20" src={img5} alt="png" />
          </div>
        </div>
      </div>


      <div className="md:pt-28 pb-28 bg-gradient-to-b from-green-50 via-indigo-50 to-white">
        <div className="flex justify-between flex-col-reverse lg:flex-row Container">
          <div className="mt-16 flex items-center justify-center w-full lg:w-6/12">
            <img className="w-[400px] mb-20" src={img11} alt="png" />
          </div>

          <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              <p className="md:text-xl text-[20px] font-semibold tracking-tighter mb-5">
                Marketing insights
              </p>
            </div>
            <p className="sm:text-5xl lg:text-left text-2xl font-semibold mt-8 md:mt-0 text-center">
              Data-driven client feedback
            </p>
            <p className="text-zinc-500 md:mt-8 mt-2 mb-5 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>
      </div>


      

      <h1 className="sm:text-5xl text-center text-2xl font-semibold mt-36 Container">
        Features
      </h1>

      <div className="Container">
        <div className="box_container w-full bg-[#fef4ff] rounded-lg px-8 py-12 mt-16 flex flex-wrap gap-10 justify-evenly">
          <div className="box max-w-80 lg:border-r-2 lg:border-b-0 border-b-2 pb-10">
            <img src={bicon1} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Advanced 256-bit encryption
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80 lg:border-r-2 lg:border-b-0 border-b-2 pb-10 lg:pb-0">
            <img src={bicon2} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Simple collaboration tools
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80">
            <img src={bicon3} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Customizable AI features
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
