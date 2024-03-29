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

const AddNotes = () => {
  const { mutationData } = UseMutation();
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  console.log(notes);

  const onChangeFormNotes = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await mutationData({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/notes",
      payload: notes,
    });
    if (response?.success) {
      router.push("/notes");
    }
  };

  console.log("ini notes", notes);
  return (
    <>
      <LayoutComponent>
        <Card margin={5} padding={4}>
          <Heading>Add Notes</Heading>
          <Grid gap={5}>
            <GridItem>
              <Text>Title</Text>
              <Input type="text" name="title" onChange={onChangeFormNotes} />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
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

export default AddNotes;
