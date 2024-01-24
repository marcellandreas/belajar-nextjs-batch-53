import { useRouter } from "next/router";

const DetailUser = () => {
  const router = useRouter();
  const { idUser } = router?.query;

  const backHome = () => {
    router.push("/users");
  };
  return (
    <section className=" min-h-screen flex justify-center items-center flex-col gap-5">
      <h1>
        HALAMAN USER <span className=" font-bold">{idUser}</span>
      </h1>
      <button className="bg-gray-200 p-2 rounded-xl " onClick={backHome}>
        Kembali ke halaman Users
      </button>
    </section>
  );
};

export default DetailUser;
