import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="navbar bg-blue-950">
      <div className="navbar-start">
        {/* mobile view */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/category/processor"}>Processor</Link>
                  </li>
                  <li>
                    <Link href={"/category/motherboard"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/category/ram"}>Ram</Link>
                  </li>
                  <li>
                    <Link href={"/category/power-supply-unit"}>
                      Power Supply
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category/monitor"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/category/others"}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/builder"}>Builder</Link>
            </li>
          </ul>
        </div>
        {/* desktop view  */}
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-violet-50 lg:ml-16"
        >
          Build My PC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" text-white font-bold text-l">
            <div
              href="/"
              className="btn btn-ghost normal-case text-xl text-violet-50"
            >
              Category
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-200"
          >
            <li>
              <Link href={"/categories/cpu"}>Processor</Link>
            </li>
            <li>
              <Link href={"/categories/motherboard"}>Motherboard</Link>
            </li>
            <li>
              <Link href={"/categories/ram"}>Ram</Link>
            </li>
            <li>
              <Link href={"/categories/powersupply"}>Power Supply</Link>
            </li>
            <li>
              <Link href={"/categories/monitor"}>Monitor</Link>
            </li>
            <li>
              <Link href={"/categories/others"}>Others</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link
            href="/pcbuilder"
            className="btn btn-ghost normal-case text-xl text-violet-50"
          >
            PC Builder
          </Link>
        </div>
      </div>

      <div className=" lg:mr-24 navbar-end">
        {session?.user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={session?.user?.image}
                  width={100}
                  height={100}
                  alt="image"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a className="justify-between">
                  {session?.user?.name}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <button onClick={() => signOut()} className="justify-between">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            {/* login area  */}
            <div>
              <Link
                href="/login"
                className="btn btn-ghost normal-case text-xl text-violet-50"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
