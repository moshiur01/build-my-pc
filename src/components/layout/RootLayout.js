import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-4 md:px-[100px]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
