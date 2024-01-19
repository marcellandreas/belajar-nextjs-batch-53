import { useRouter } from "next/router";

const DetailBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  return <section>Detail Blog {id}</section>;
};

export default DetailBlog;
