import dynamic from "next/dynamic";

const CompendiumClient = dynamic(() => import("./CompendiumClient"), { ssr: false });

export default function CompendiumPage() {
  return <CompendiumClient />;
}
