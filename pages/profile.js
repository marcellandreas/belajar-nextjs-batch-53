import Layout from "@/layout";
import { useRouter } from "next/router";

const Profile = () => {
  const ROUTER = useRouter();

  const backToMenu = () => {
    ROUTER.push("/");
  };
  return (
    <Layout metaTitle="Profile" metaDescription="Informasi Profile">
      <section className="flex flex-col gap-2 w-80 h-80 bg-gray-200/10 justify-center items-center">
        <p className=" capitalize text-xl">ini halaman profile</p>
        <button className="bg-gray-200 p-2 rounded-xl " onClick={backToMenu}>
          Kembali ke Home
        </button>
      </section>
    </Layout>
  );
};

export default Profile;
