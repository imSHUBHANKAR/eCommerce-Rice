import Rice1 from '../assets/AllRice.svg';
import BGImg from '../assets/BGImgRice.jpg';
import { IoCartOutline } from "react-icons/io5";
import { BsBoxArrowUpRight } from "react-icons/bs";


function CoverPage() {
  return (
    <div
      className="relative flex justify-between bg-yellow-300 w-auto h-auto rounded-3xl p-12 m-12 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BGImg})`,
          filter: 'blur(2px)',
          opacity: 0.5,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Rice Products</h1>

        <h1>145/-</h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  <div className="flex items-center gap-2 sm:gap-4 rounded-full text-sm sm:text-base p-2 sm:p-4 bg-white">
    <button className="bg-white rounded-full">Buy Now</button>
    <IoCartOutline className="text-lg sm:text-xl" />
  </div>
  <div className="flex items-center gap-2 sm:gap-4 bg-gray-950 rounded-full text-sm sm:text-base text-white p-2 sm:p-4">
    <button>Explore More</button>
    <BsBoxArrowUpRight className="text-lg sm:text-xl" />
  </div>
</div>

      </div>
      
      {/* Product Image */}
      <div className="relative z-10 w-96">
        <img src={Rice1} alt="Rice Product" />
      </div>
    </div>
  );
}

export default CoverPage;
