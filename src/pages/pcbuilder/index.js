import RootLayout from "@/components/layout/RootLayout";
import PcBuilderHomeUI from "@/components/layout/ui/PcBuilder/PcBuilderHomeUI";
import Head from "next/head";

const PcBuilderHome = () => {
  return (
    <>
      <Head>
        <title>PC Builder Home Page</title>
      </Head>
      <div>
        <PcBuilderHomeUI></PcBuilderHomeUI>
      </div>
    </>
  );
};

export default PcBuilderHome;

//shared component (navbar and Footer)
PcBuilderHome.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
