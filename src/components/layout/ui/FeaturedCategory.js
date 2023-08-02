import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = () => {
  const categories = [
    {
      title: "CPU",
      image: "/images/catagoryImg/cpu-tower.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "/images/catagoryImg/motherboard.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "/images/catagoryImg/ram.png",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: "/images/catagoryImg/power-supply.png",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "/images/catagoryImg/ssd-drive.png",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: "/images/catagoryImg/monitor.png",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: "/images/catagoryImg/graphics-card.png",
      href: "/categories/others",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-center text-4xl font-bold mb-4">
        Featured Categories
      </h1>
      <p className="text-center mb-8">Explore our featured categories!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories?.map((category, i) => (
          <Link href={category?.href} key={i}>
            <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-xl ">
              <div className="p-4 text-center">
                <Image
                  src={category?.image}
                  width={100}
                  height={100}
                  alt="card image"
                  className="mx-auto pt-4"
                />
                <p className="text-xl font-bold mt-3">{category?.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
