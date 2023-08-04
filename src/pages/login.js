import RootLayout from "@/components/layout/RootLayout";
import loginImg from "../assets/login.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Head from "next/head";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-6 py-8">
          <p className="text-2xl font-bold text-center pt-3">LOGIN </p>
          <div className="flex justify-center ">
            <Image
              src={loginImg}
              alt="Login Image"
              width={450}
              height={200}
              className="rounded-full"
            />
          </div>

          <div className="mt-4">
            <button
              className="btn  btn-block mb-2 bg-gradient-to-r from-blue-800 to-blue-700 text-white"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://build-my-pc-bice.vercel.app/",
                })
              }
            >
              <FcGoogle size={26} />
              Sign in with Google
            </button>
            <button
              className="btn btn-block bg-gradient-to-r from-blue-800 to-blue-700 text-white   "
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://build-my-pc-bice.vercel.app/",
                })
              }
            >
              <BsGithub size={26} />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

//shared component (navbar and Footer)
LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
