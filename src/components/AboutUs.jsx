import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import about3 from "../assets/about3.svg";
import about4 from "../assets/about4.svg";
import about5 from "../assets/about5.svg";
import about6 from "../assets/about6.svg";
import man from "../assets/man-wearing-blue-crew-neck-t-shirt-2379005.svg";
import man2 from "../assets/man-working-from-home-5198252.svg";
import people from "../assets/people-working-in-front-of-the-computer-3184357.svg";
import people2 from "../assets/person-using-macbook-pro-3861964.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="Container">
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100 via-white to-white flex flex-col justify-center w-full items-center pt-20">
          <h1 className="sm:text-5xl text-center text-2xl font-bold Container">
            We are proud of our products
          </h1>
          <div className="Container">
            <p className="sm:mt-10 mt-8 text-center sm:text-lg text-[13px] text-zinc-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              <br /> invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </p>
            <div className="img flex gap-10 flex-col lg:flex-row mt-20 items-center">
              <img className="w-64" src={man2} alt="" />
              <img className="w-64" src={people} alt="" />
              <img className="w-64" src={people2} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-52 mt-20 flex-col w-full">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            <p className="md:text-xl text-[20px] font-semibold tracking-tighter text-center">
              About Us
            </p>
          </div>
          <p className="sm:text-5xl text-center text-2xl font-semibold lg:mt-8 mt-2">
            We’re a team of data analysts
          </p>
          <p className="text-zinc-500 mt-5 lg:mb-32 mb-20 text-center self-center lg:w-6/12 w-full">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#F0F2FE]">
        <div className="Container flex gap-10 flex-col lg:flex-row items-center md-items-start">
          <div className="1 lg:w-6/12 w-full">
            <div className="flex justify-center items-center lg:items-start md:mt-32 md:mb-32 mt-20 mb-0 flex-col">
              <div className="bg-gradient-to-r from-blue-500  to-cyan-400 inline-block text-transparent bg-clip-text">
                <p className="md:text-xl text-[20px] font-semibold tracking-tighter">
                  Our Vision
                </p>
              </div>
              <p className="sm:text-5xl text-2xl font-semibold lg:mt-8 mt-2 text-center lg:text-start">
                To provide solutions for growing companies
              </p>
              <p className="text-zinc-500 mt-5 mb-5 text-center lg:text-start">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </div>
          </div>

          <div className="2 lg:w-6/12 w-full">
            <div className="flex justify-center items-center lg:items-start lg:mt-32 md:mb-32 mt-0 mb-20 flex-col">
              <div className="bg-gradient-to-r from-blue-500  to-cyan-400 inline-block text-transparent bg-clip-text">
                <p className="md:text-xl text-[20px] font-semibold tracking-tighter">
                  Our Vision
                </p>
              </div>
              <p className="sm:text-5xl text-2xl font-semibold lg:mt-8 mt-2 text-center lg:text-start">
                To provide solutions for growing companies
              </p>
              <p className="text-zinc-500 mt-5 mb-5 text-center lg:text-start">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="sm:text-5xl text-center text-2xl font-semibold md:mt-64 mt-28">
        Our corporate values
      </h1>

      <p className="text-zinc-500 mt-5 mb-5 lg:mb-10 text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </p>

      <div className="Container">
        <div className="box_container w-full bg-[#fef4ff] rounded-txl px-8 py-12 mt-8 flex flex-wrap gap-10 justify-evenly">
          <div className="box max-w-80 pb-10">
            <img src={about1} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Best in Class
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80 pb-10 lg:pb-0">
            <img src={about2} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Authenticity
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80">
            <img src={about3} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Email Support
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>

        <div className="box_container w-full bg-[#fef4ff] rounded-b-xl px-8 py-0 flex flex-wrap gap-10 justify-evenly pb-5">
          <div className="box max-w-80 pb-10 mt-10 lg:mt-0">
            <img src={about4} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Discounts Available
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80 pb-10 lg:pb-0">
            <img src={about5} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Powerful Marketing
            </p>
            <p className="text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="box max-w-80">
            <img src={about6} alt="" />
            <p className="sub_heading text-xl sm:text-3xl font-medium mt-5">
              Inventory management
            </p>
            <p className="text-zinc-500 mt-5 pb-10">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>
      </div>

      <div className="team Container">
        <div className="wrapper w-full flex flex-col lg:flex-row gap-28">
          <div className="team_txt lg:w-2/5 w-full mt-48">
            <p className="sm:text-4xl text-2xl font-semibold text-center lg:text-start">
              Our talented Team
            </p>
            <p className="mt-5 sm:text-lg text-[13px] text-center lg:text-start text-zinc-500 w-full">
              Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>

          <div className="team_card 3/5 lg:mt-44 mt-0">
            <div className="card_container w-full justify-between flex flex-col gap-5">
              <div className="cardup flex flex-wrap gap-5 w-full justify-center">
                <div className="card w-52 h-64 rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>

                <div className="card w-52 h-64 rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>

                <div className="card w-52 h-64  rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>
              </div>

              <div className="card_down flex flex-wrap gap-5 w-full justify-center">
                <div className="card w-52 h-64  rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>

                <div className="card w-52 h-64  rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>

                <div className="card w-52 h-64  rounded-xl bg-[#E0E4FC]">
                  <img src={man} alt="" />
                  <p className="px-4 pt-4 text-lg font-semibold">
                    Blake Matthews
                  </p>
                  <p className="px-4 text-xs text-zinc-500">CEO & Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
