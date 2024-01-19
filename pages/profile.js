import Layout from "@/layout";
import { useRouter } from "next/router";

const Profile = () => {
  const ROUTER = useRouter();

  const backToMenu = () => {
    ROUTER.push("/");
  };
  return (
    <Layout>
      <p className=" capitalize text-xl">ini halaman profile</p>
      <button className="bg-gray-200 p-2 rounded-xl " onClick={backToMenu}>
        Kembali ke Home
      </button>
    </Layout>
  );
};

export default Profile;
