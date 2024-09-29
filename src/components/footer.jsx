import { Link } from "react-router-dom";
import social from "../assets/Social.svg";

const footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-green-100 via-white to-white pb-32">
      <div className="mt-36">
        <h1 className="sm:text-5xl text-center text-2xl font-semibold Container">
          Are you ready to grow your <br /> business with us?
        </h1>
      </div>

        <p className="sm:mt-10 mt-12 text-center sm:text-lg text-[13px] text-zinc-500 Container">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <Link
          to="/Prizing"
          className="rounded-md py-2.5 sm:py-3 px-5 bg-black text-white sm:text-[15px] text-[13px] min-w-24 max-w-32 mt-10"
        >
          View Pricing
        </Link>
      </div>

      <div className="bg-[#1D2130] w-full">
        <div className="Container">
          <div className="flex justify-between items-center text-center md:text-start md:flex-row flex-col flex-wrap">
            <div className="1 flex flex-col gap-3 md:w-1/5">
              <p className="text-lg text-white font-medium md:pt-20 pt-10">Company</p>
              <p className="text-zinc-500 cursor-pointer">About Us</p>
              <p className="text-zinc-500 cursor-pointer">Why Chopse Up</p>
              <p className="text-zinc-500 cursor-pointer">Pricing</p>
              <p className="text-zinc-500 cursor-pointer">Testimonial</p>
            </div>

            <div className="1 flex flex-col gap-3 md:w-1/5">
              <p className="text-lg text-white font-medium md:pt-20 pt-10">Resources</p>
              <p className="text-zinc-500 cursor-pointer">About Us</p>
              <p className="text-zinc-500 cursor-pointer">Why Chopse Up</p>
              <p className="text-zinc-500 cursor-pointer">Pricing</p>
              <p className="text-zinc-500 cursor-pointer">Testimonial</p>
            </div>

            <div className="1 flex flex-col gap-3 md:w-1/5">
              <p className="text-lg text-white font-medium md:pt-20 pt-10">Product</p>
              <p className="text-zinc-500 cursor-pointer">About Us</p>
              <p className="text-zinc-500 cursor-pointer">Why Chopse Up</p>
              <p className="text-zinc-500 cursor-pointer">Pricing</p>
              <p className="text-zinc-500 cursor-pointer">Testimonial</p>
            </div>

            <div className="1 flex flex-col gap-3 md:w-[300px]">
              <div className="Logo font-cusFont text-2xl font-semibold pt-20 text-white">
                <Link to="/">&#123;Finsweet</Link>
              </div>
              <p className="text-lg text-white font-medium pt-5">
                Subscribe to our Newsletter
              </p>
              <div className="bg-[#2B2E3C] rounded-lg flex w-full sm:max-w-[300px] justify-between self-center md:self-start">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="outline-none border-none px-5 py-3 bg-transparent text-zinc-500 text-[12px] md:text-base min-w-12" 
                />
                <button className="bg-white py-3 rounded-lg px-5 text-[12px] md:text-base self-end">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-zinc-400 justify-center items-center gap-5 Container">
          <p className="text-base md:pb-16 mt-16">© Copyright Finsweet 2022</p>
          <img className="pb-16 cursor-pointer w-32 md:mt-16 mt-0" src={social} alt="" />
        </div>
      </div>
    </div>
  );
};

export default footer;
