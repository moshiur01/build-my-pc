import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    <div>
      <h1>This is Index</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
