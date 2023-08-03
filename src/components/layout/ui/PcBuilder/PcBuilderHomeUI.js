import Image from "next/image";
import { useRouter } from "next/router";

const PcBuilderHomeUI = () => {
  // get the route
  const router = useRouter();

  const categories = [
    {
      title: "CPU",
      image: "/images/catagoryImg/cpu-tower.png",
      href: "/pcbuilder/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "/images/catagoryImg/motherboard.png",
      href: "/pcbuilder/categories/motherboard",
    },
    {
      title: "RAM",
      image: "/images/catagoryImg/ram.png",
      href: "/pcbuilder/categories/ram",
    },
    {
      title: "PSU",
      image: "/images/catagoryImg/power-supply.png",
      href: "/pcbuilder/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "/images/catagoryImg/ssd-drive.png",
      href: "/pcbuilder/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: "/images/catagoryImg/monitor.png",
      href: "/pcbuilder/categories/monitor",
    },
    {
      title: "Others",
      image: "/images/catagoryImg/graphics-card.png",
      href: "/pcbuilder/categories/others",
    },
  ];
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Your Desired Product For Your Dream Rig
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((category, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-md px-4 py-3 flex flex-grow items-center justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2 text-center">
              <Image
                src={category.image}
                height={50}
                width={50}
                alt="CategoryImage"
              />
              <h3 className="text-lg font-semibold mt-2">
                {category.title !== "Others"
                  ? category.title
                  : `${category.title} (Optional)`}
              </h3>
            </div>
            <button
              onClick={() => router.push(category.href)}
              type="button"
              className="py-2 px-4 border rounded-md text-black font-semibold bg-violet-100 hover:bg-violet-200 transition-colors duration-300 focus:outline-none "
            >
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PcBuilderHomeUI;
