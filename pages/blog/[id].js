import Layout from "@/layout";
import { useRouter } from "next/router";
import { Data } from "@/data";
import { useEffect, useState } from "react";

const DetailBlog = () => {
  const router = useRouter();
  const { id: asIDDetail } = router.query;

  console.log(asIDDetail);
  const [dataId, setDataId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (asIDDetail) {
        const data = Data.find((data) => data.id === Number(asIDDetail));
        setDataId(data);
      }
    };

    fetchData();
  }, [asIDDetail]);

  console.log(dataId);

  return (
    <Layout>
      <section>Detail Blog {asIDDetail}</section>
    </Layout>
  );
};

export default DetailBlog;
