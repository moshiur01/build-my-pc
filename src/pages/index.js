import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/layout/ui/Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
