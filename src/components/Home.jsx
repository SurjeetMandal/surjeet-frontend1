import heroImg from "../assets/Dashboard image.svg";
import img1 from "../assets/icon1.svg";
import img2 from "../assets/icon2.svg";
import img3 from "../assets/icon3.svg";
import img4 from "../assets/Icon.svg";
import img5 from "../assets/Image.svg";
import logo1 from '../assets/Logo 1.svg';
import logo2 from "../assets/Logo 3.svg";
import logo3 from "../assets/Logo 4.svg";
import logo4 from "../assets/Logo 5.svg";
import logo5 from "../assets/Logo 2.svg"
import circleImg1 from "../assets/circleImg1.svg";
import circleImg2 from "../assets/circleImg2.svg";
import circleImg3 from "../assets/circleImg3.svg";
import bicon1 from "../assets/b-icon.svg";
import bicon2 from "../assets/b-icon2.svg";
import bicon3 from "../assets/b-icon3.svg";

const Home = () => {
  return (
    <div>
      <div className="md:pt-18 pt-20">
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100 via-white to-white flex flex-col justify-center w-full items-center">
          <h1 className="sm:text-5xl text-center text-2xl font-semibold Container">
            The Best Software to Grow <br /> your Sale and Service
          </h1>
          <div className="Container">
            <p className="sm:mt-10 mt-8 text-center sm:text-lg text-[13px] text-zinc-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod <br /> invidunt ut labore et dolore magna erat.
            </p>
          </div>

          <div className="flex mt-10 sm:mt-10 max-w-[445px] w-full justify-center items-center bg-white rounded-md">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="sm:min-w-80 max-w-44 py-4 rounded-md px-3 outline-none sm:text-lg text-[13px]"
            />
            <button className="rounded-md py-2.5 sm:py-3 px-3 bg-black text-white right-9 sm:text-[15px] text-[13px] min-w-24">
              Get Free Trial
            </button>
          </div>

          <img src={heroImg} alt="Png" className="mt-10 md:max-h-[400px] lg:max-h-[700px] sm:max-h-[300px] max-h-[200px]" />
        </div>
      </div>

      <div className="flex justify-center Container">
        <div className="md:mt-40 mt-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-400 inline-block text-transparent bg-clip-text">
          <p className="md:text-xl text-[20px] font-semibold tracking-tighter mb-8">
            High-quality
          </p>
        </div>
      </div>

      <h1 className="sm:text-5xl text-center text-2xl font-semibold Container">
        We have the Best Solution <br /> for your Business
      </h1>

      <div className="Container">
        <div className="box_container w-full bg-[#E0E4FC] rounded-lg px-8 py-12 mt-16 flex flex-wrap gap-10 justify-evenly">
          <div className="box max-w-80">
            <img src={img1} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              High security to protect from piracy
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80">
            <img src={img2} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Premium quality performance
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80">
            <img src={img3} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Full time customer support - 24/7
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:gap-32 lg:flex-row flex-col Container">
        <div className="flex justify-center md:mt-52 mt-20 lg:w-5/12 flex-col">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            <p className="md:text-xl text-[20px] font-semibold tracking-tighter">
              Why should you work with us?
            </p>
          </div>
          <p className="sm:text-5xl text-left text-2xl font-semibold lg:mt-8 mt-2">
            To upscale your business to the next level
          </p>
          <p className="text-zinc-500 mt-5 mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="lg:mt-60 flex flex-col gap-8 ">
          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]" src={img4} alt="png" />
            <p className="text-zinc-600 font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]" src={img4} alt="png" />
            <p className="text-zinc-600 font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]" src={img4} alt="png" />
            <p className="text-zinc-600 font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-indigo-100 to-violet-50 w-full md:mt-56 mt-20">
          <div className="flex justify-between flex-col lg:flex-row Container">
            <div className="flex justify-center items-center lg:items-start mt-8 w-full lg:w-6/12 flex-col">
              <p className="sm:text-5xl lg:text-left text-2xl font-semibold mt-8 md:mt-0 text-center">
                To upscale your business to the next level
              </p>
              <p className="text-zinc-500 mt-8 mb-5 lg:text-left text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
              <button className="rounded-md py-2.5 sm:py-3 px-3 bg-black text-white sm:text-[15px] text-[13px] min-w-24 max-w-32">
                Get Free trial
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center">
              <img className="w-[500px] mb-20" src={img5} alt="png" />
            </div>
          </div>
      </div>

      <div className="Container">
        <div className="flex flex-wrap mt-16 md:justify-between justify-evenly gap-10">
            <img className="h-7 md:h-10" src={logo1} alt="" />
            <img className="h-7 md:h-10" src={logo2} alt="" />
            <img className="h-7 md:h-10" src={logo3} alt="" />
            <img className="h-7 md:h-10" src={logo4} alt="" />
            <img className="h-7 md:h-10" src={logo5} alt="" />
        </div>
      </div>

      <div className="flex lg:gap-32 lg:flex-row flex-col Container">
        <div className="flex justify-center md:mt-60 mt-32 lg:w-5/12 flex-col">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            <p className="md:text-xl text-[20px] font-semibold tracking-tighter">
              Discover More
            </p>
          </div>
          <p className="sm:text-5xl text-left text-2xl font-semibold lg:mt-8 mt-2">
            Analyze your sales and marketing leads
          </p>
          <p className="text-zinc-500 mt-5 mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="lg:mt-60 flex flex-col gap-8 ">
          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]" src={circleImg1} alt="png" />
            <div>
              <p className="sub_heading text-xl font-semibold mb-2">
                Sales Tracking
              </p>
              <p className="text-zinc-600 font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]" src={circleImg2} alt="png" />
            <div>
              <p className="sub_heading text-xl font-semibold mb-2">
                Project Management
              </p>
              <p className="text-zinc-600 font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center gap-5">
            <img className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]" src={circleImg3} alt="png" />
            <div>
              <p className="sub_heading text-xl font-semibold mb-2">
                Activity Report
              </p>
              <p className="text-zinc-600 font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="sm:text-5xl text-center text-2xl font-semibold md:mt-64 mt-28 lg:mb-20">
        Features
      </h1>

      <div className="Container">
        <div className="box_container w-full bg-[#fef4ff] rounded-lg px-8 py-12 mt-8 flex flex-wrap gap-10 justify-evenly">
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

export default Home;
