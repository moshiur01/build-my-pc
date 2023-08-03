import { clearProducts } from "@/redux/features/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const PcBuilderHomeUI = () => {
  // get the route
  const router = useRouter();
  //destructure data from redux state
  const { cpu, motherboard, ram, powerSupply, storage, monitor, others } =
    useSelector((state) => state.pcBuilder);

  const dispatch = useDispatch();

  //alert

  const ShowConfirmAlert = () => {
    Swal.fire(
      "PC Build Completed!",
      "Your Dream Rig Will Get Early Soon ",
      "success"
    );
    dispatch(clearProducts());
  };
  const categories = [
    {
      title: "CPU/Processor",
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
      title: "Power Supply Unit",
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
    <div className="p-4 md:p-8 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Your Desired Product For Your Dream Rig
      </h1>
      <div className="grid gap-4">
        {categories.map((category, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-md px-4 py-3 flex flex-row items-center justify-between hover:shadow-lg transition-shadow duration-300"
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
            {(category.title === cpu?.Category && (
              <div className="text-center my-auto">
                <Image
                  src={cpu.image}
                  height={110}
                  width={100}
                  alt="CategoryImage"
                  className="mx-auto rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">
                  {cpu?.ProductName}
                </h3>
              </div>
            )) ||
              (category.title === motherboard?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={motherboard.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {motherboard?.ProductName}
                  </h3>
                </div>
              )) ||
              (category.title === ram?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={ram.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {ram?.ProductName}
                  </h3>
                </div>
              )) ||
              (category.title === powerSupply?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={powerSupply.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {powerSupply?.ProductName}
                  </h3>
                </div>
              )) ||
              (category.title === storage?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={storage.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {storage?.ProductName}
                  </h3>
                </div>
              )) ||
              (category.title === monitor?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={monitor.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {monitor?.ProductName}
                  </h3>
                </div>
              )) ||
              (category.title === others?.Category && (
                <div className="text-center my-auto">
                  <Image
                    src={others.image}
                    height={110}
                    width={100}
                    alt="CategoryImage"
                    className="mx-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {others?.ProductName}
                  </h3>
                </div>
              ))}
            <button
              onClick={() => router.push(category.href)}
              type="button"
              className="py-2 px-4 border rounded-md text-black font-semibold bg-violet-100 hover:bg-violet-200 transition-colors duration-300 focus:outline-none"
            >
              Choose
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={() => ShowConfirmAlert()}
          className="btn btn-primary text-white sm:btn-block lg:w-auto text-center mx-auto block rounded-lg"
          disabled={
            !cpu || !motherboard || !ram || !powerSupply || !storage || !monitor
          }
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilderHomeUI;
