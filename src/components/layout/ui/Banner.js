import Image from "next/image";
import bannerImg from "../../../assets/bannerImg.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r p-8 rounded-lg shadow-lg lg:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-black">
          <h2 className="text-4xl font-bold mb-4">Make your Dream Rig here </h2>
          <p className="text-lg mb-6">
            Build Your Custom AMD Ryzen or Intel Gaming PC from PC Builder.
            Visit Star Tech shop or Order Online to get delivery Anywhere in BD.
          </p>
          <Link
            href="/builder"
            className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Build Your PC
          </Link>
        </div>
        <div className="flex justify-center overflow-hidden">
          <div className="relative w-96 h-64 rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-110">
            <Image
              src={bannerImg}
              layout="fill"
              objectFit="cover"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
