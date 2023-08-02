import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/layout/ui/Banner";
import FeaturedCategory from "@/components/layout/ui/FeaturedCategory";
import FeaturedProducts from "@/components/layout/ui/FeaturedProducts";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner></Banner>
      <FeaturedProducts products={products} />
      <FeaturedCategory></FeaturedCategory>
    </div>
  );
}

//shared component (navbar and Footer)
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const shuffledData = data.data.sort(() => 0.5 - Math.random());

  const randomProducts = shuffledData.slice(0, 8);

  return {
    props: {
      products: randomProducts,
    },
    revalidate: 30,
  };
};
