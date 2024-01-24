import React from "react";
import { dataMahasiswa } from "../../data/index";
import Link from "next/link";
import { useRouter } from "next/router";

function Users() {
  const router = useRouter();
  const backHome = () => {
    router.push("/");
  };
  return (
    <section className="flex flex-col gap-5 min-h-screen pt-20 ">
      <h1 className="text-black font-bold text-center">HALAMAN USERS</h1>
      <div className="flex gap-2 flex-wrap text-center">
        {dataMahasiswa.map((data) => (
          <Link href={`/users/${data.nama}`}>
            <section className=" bg-slate-800 w-72 text-white rounded-xl ">
              <h2 className=" text-xl font-bold">{data.nama}</h2>
              <h4 className=" text-xl font-semibold">{data.jurusan}</h4>
            </section>
          </Link>
        ))}
      </div>
      <button className="bg-gray-200 p-2 rounded-xl " onClick={backHome}>
        Kembali ke Home
      </button>
    </section>
  );
}

export default Users;
