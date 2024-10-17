import bannerImg from "../assets/d57b5fb5ad84c9f6a9b1eb9782e9b11b.jpg";

const Banner = () => {
  return (
    <div
      className={`w-full h-[600px] bg-cover bg-center rounded-3xl flex flex-col justify-center items-center text-center mb-[100px]`}
      style={{
        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(${bannerImg}) lightgray 0px -18.896px / 100% 123.31% no-repeat`,
      }}
    >
      <h3 className="text-[52px] text-white font-bold mb-6 max-w-[895px]">
        Discover an exceptional cooking class tailored for you!
      </h3>
      <p className="text-lg text-white mb-10 max-w-[930px]">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex gap-6">
        <button className="text-black text-xl font-semibold px-7 py-5 rounded-[50px] bg-[#0BE58A]">
          Explore Now
        </button>
        <button className=" text-white border border-white text-xl font-semibold px-7 py-5 rounded-[50px] bg-none">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
