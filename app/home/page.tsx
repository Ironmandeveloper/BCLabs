import MainLayout from "@/layouts/MainLayout";
import HeroSection from "./HeroSection";
import AssetsTable from "./AssetsTable";
import Swap from "./Swap";
import { getAssets } from "@/db/lib";

export default async function Page() {
  const data = await getAssets();
  return (
    <MainLayout>
      <>
      <HeroSection/>
      <AssetsTable data={data}/>
      <Swap/>
      </>
    </MainLayout>
  );
}
