import contact1 from "../assets/contact1.svg";
import contact2 from "../assets/contact2.svg";
import contact3 from "../assets/contact3.svg";

const Contact = () => {
  return (
    <div>
      <div className="">
        <div className=" md:pt-18 pt-20 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-green-50 via-white to-white w-full h-full">
          <h1 className="sm:text-5xl text-center text-2xl font-bold mb-20">
            Get in touch with us
          </h1>

          <div className="Container">
            <div className="bg-[#F0F2FE] py-6 px-5 lg:px-12 rounded-xl flex flex-col items-evenly">
              <p className="sub_heading text-xl sm:text-3xl text-center lg:text-left font-medium mt-5">
                Drop us a message
              </p>
              <p className="text-zinc-500 mt-5 text-center lg:text-left">
                We will get back to you as soon as possible.
              </p>

              <div className="flex mt-16 gap-16 flex-col lg:flex-row items-center lg:items-start">
                <div className="form lg:w-6/12 w-full flex flex-col gap-5 mim-w-[300px]">
                  <div className="inp_1 w-full flex gap-5 lg:gap-3 flex-col lg:flex-row">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="lg:w-6/12 w-full outline-none px-5 py-3 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="lg:w-6/12 w-full outline-none px-5 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Work Email"
                    className="max-w-full outline-none px-5 py-3 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="max-w-full outline-none px-5 py-3 rounded-lg text-sm"
                  />
                  <textarea
                    placeholder="Message"
                    className="max-w-full outline-none px-5 py-3 rounded-lg text-sm"
                    rows={5}
                    name=""
                    id=""
                  ></textarea>
                  <button className="rounded-lg py-3 sm:py-3 px-5 bg-black text-white sm:text-[15px] text-[13px] min-w-24 max-w-full mb-10">
                    Send
                  </button>
                </div>


                <div className="flex flex-col gap-8 lg:items-start lg:w-6/12 w-full items-center mb-10 lg:mb-0">
                  <div className="flex justify-center items-center gap-5 w-full">
                    <img
                      className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]"
                      src={contact1}
                      alt="png"
                    />
                    <div>
                      <p className="sub_heading text-xl font-semibold mb-1">
                        + 1800 145 276 77555
                      </p>
                      <p className="text-zinc-400 font-light text-sm">
                        Free support
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-5 w-full">
                    <img
                      className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]"
                      src={contact2}
                      alt="png"
                    />
                    <div>
                      <p className="sub_heading text-xl font-semibold mb-1">
                        finsweet@gmail.com
                      </p>
                      <p className="text-zinc-400 font-light text-sm">
                        Help Email support
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-5 w-full">
                    <img
                      className="w-[42px] h-[42px] md:w-[48px] md:h-[48px]"
                      src={contact3}
                      alt="png"
                    />
                    <div>
                      <p className="sub_heading text-xl font-semibold mb-1">
                        sales@finsweet.com
                      </p>
                      <p className="text-zinc-400 font-light text-sm">
                        Sales Enquiry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
