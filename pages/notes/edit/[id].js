import dynamic from "next/dynamic";
import Link from "next/link";
const LayoutComponent = dynamic(() => import("@/layout"));
import {
  Grid,
  GridItem,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UseMutation } from "@/hooks/useMutation";

const EditNotes = () => {
  const router = useRouter();
  const { mutationData } = UseMutation();
  const { id } = router?.query;
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  console.log("ini ", notes);

  const onChangeFormNotes = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
      );
      const listNotes = await res.json();
      setNotes({
        title: listNotes?.data?.title,
        description: listNotes?.data?.description,
      });
    }

    fecthData();
  }, [id]);

  const handleSubmit = async () => {
    const response = await mutationData({
      url: `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
      method: "PATCH",
      payload: notes,
    });

    if (response?.success) {
      router.push("/notes");
    }

    console.log(response);
  };

  console.log("ini notes", notes);
  return (
    <>
      <LayoutComponent>
        <Card margin={5} padding={4}>
          <Heading>Edit Notes</Heading>
          <Grid gap={5}>
            <GridItem>
              <Text>Title</Text>
              <Input
                value={notes.title}
                type="text"
                name="title"
                onChange={onChangeFormNotes}
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                value={notes.description}
                type="text"
                name="description"
                onChange={onChangeFormNotes}
              />
            </GridItem>
            <GridItem>
              <Button onClick={handleSubmit} colorScheme="blue">
                Submit
              </Button>
            </GridItem>
          </Grid>
        </Card>
      </LayoutComponent>
    </>
  );
};

export default EditNotes;
