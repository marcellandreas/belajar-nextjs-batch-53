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
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fecthData() {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes"
      );
      const listNotes = await res.json();
      setNotes(listNotes);
      // setIsLoading(false);
    }

    fecthData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        router.reload();
        // setIsLoading(true);
        alert(`${id} berhasil dihapus`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LayoutComponent>
        <Flex padding={5} flexDirection="column" gap={2}>
          <Flex justifyContent="flex-end">
            <Button
              onClick={() => {
                router.push("/notes/add");
              }}
            >
              Add Note
            </Button>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            {notes.data?.map((data) => (
              <GridItem key={data.id}>
                <Card
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  _hover={{ transform: "scale(0.9)" }}
                >
                  <Box p={4}>
                    <Heading fontSize="xl" fontWeight="semibold" mb={2}>
                      {data.title}
                    </Heading>
                    <Text textAlign={"justify"} color="gray.500">
                      {data.description}
                    </Text>
                  </Box>
                  <Flex
                    justifyContent="space-between"
                    align="center"
                    p={4}
                    borderTopWidth="1px"
                    borderColor="gray.200"
                  >
                    <Button
                      onClick={() => {
                        router.push(`/notes/edit/${data.id}`);
                      }}
                      variant="ghost"
                      colorScheme="blue"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(data.id);
                      }}
                      variant="ghost"
                      colorScheme="red"
                    >
                      Hapus
                    </Button>
                  </Flex>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </LayoutComponent>
    </>
  );
};

export default Notes;
