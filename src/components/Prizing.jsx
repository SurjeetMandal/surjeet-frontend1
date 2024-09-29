import price1 from "../assets/price1.svg";
import price2 from "../assets/price2.svg";
import price3 from "../assets/price3.svg";
import price4 from "../assets/price4.svg";

const Prizing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full items-center pt-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100 via-blue-50 to-white">
        <h1 className="sm:text-5xl text-center text-2xl font-bold Container">
          Pricing plans that <br /> suit you
        </h1>
        <div className="Container">
          <p className="sm:mt-10 mt-8 text-center sm:text-lg text-[13px] text-zinc-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod <br /> invidunt ut labore et dolore magna erat.
          </p>
        </div>

        <div className="Container w-full">
          <div className="price w-full flex gap-10 md:gap-5 mt-20 pb-56 justify-center items-center flex-col md:flex-row">


            <div className="p1 w-full md:w-1/3 h-[650px] rounded-2xl bg-white pb-5">
              <div className="1 flex h-1/5 w-full py-4 px-10 items-center gap-5 border-b-2">
                <img className="w-10" src={price1} alt="" />
                <div className="txt flex flex-col">
                  <p className="text-2xl font-semibold">Regular</p>
                  <p className="text-xs text-zinc-400">Starter Plan</p>
                </div>
              </div>

              <div className="2 flex h-3/5 w-full py-4 px-10 justify-center gap-10 flex-col">
                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Limited Projects</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">
                    Regular Support Business
                  </p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">1 month Free Trial</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">3GB storage</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Ads Preview</p>
                </div>
              </div>

              <div className="3 flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">Free</p>
                <p className="text-xs text-zinc-500">For Limited Period</p>
                <button className="text-white bg-black py-2 px-5 rounded-xl mt-5">
                  Get Started
                </button>
              </div>
            </div>

            <div className="p2 border-4 border-[#6B7CFF] w-full md:w-1/3 h-[670px] rounded-2xl bg-gradient-to-t from-[#D5F4EC] to-[#D7E7F9] pb-5">
              <div className="1 flex h-1/5 w-full py-4 px-5 items-center gap-5 border-b-2 border-zinc-400">
                <img className="w-10" src={price2} alt="" />
                <div className="txt flex flex-col">
                  <p className="text-2xl font-semibold">Plantinum</p>
                  <p className="text-xs text-zinc-400">For the best results</p>
                </div>
              </div>

              <div className="2 flex h-3/5 w-full py-4 px-10 justify-center gap-10 flex-col">
                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Limited Projects</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">
                    Regular Support Business
                  </p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">1 month Free Trial</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">3GB storage</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Ads Preview</p>
                </div>
              </div>

              <div className="3 flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">$342</p>
                <p className="text-xs text-zinc-500">For Limited Period</p>
                <button className="text-white bg-black py-2 px-5 rounded-xl mt-5">
                  Get Started
                </button>
              </div>
            </div>

            <div className="p3 w-full md:w-1/3 h-[650px] rounded-2xl bg-white pb-5">
              <div className="1 flex h-1/5 w-full py-4 px-10 items-center gap-5 border-b-2">
                <img className="w-10" src={price3} alt="" />
                <div className="txt flex flex-col">
                  <p className="text-xl font-semibold">Standard</p>
                  <p className="text-xs text-zinc-400">Most popular</p>
                </div>
              </div>

              <div className="2 flex h-3/5 w-full py-4 px-10 justify-center gap-10 flex-col">
                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Limited Projects</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">
                    Regular Support Business
                  </p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">1 month Free Trial</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">3GB storage</p>
                </div>

                <div className="flex gap-3">
                  <img className="w-5" src={price4} alt="" />
                  <p className="text-base font-medium">Ads Preview</p>
                </div>
              </div>

              <div className="3 flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">$234</p>
                <p className="text-xs text-zinc-500">Billing Monthly</p>
                <button className="text-white bg-black py-2 px-5 rounded-xl mt-5">
                  Get Started
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizing;
