import dynamic from "next/dynamic";

const AdminPortal = dynamic(() => import("./AdminClient"), { ssr: false });

export default function AdminPage() {
  return <AdminPortal />;
}
