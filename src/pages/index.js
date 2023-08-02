import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/layout/ui/Banner";
import FeaturedProducts from "@/components/layout/ui/FeaturedProducts";

export default function Home({ products }) {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts products={products} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const shuffledData = data.data.sort(() => 0.5 - Math.random());

  const randomProducts = shuffledData.slice(0, 8);

  console.log(randomProducts);

  return {
    props: {
      products: randomProducts,
    },
    revalidate: 30,
  };
};
