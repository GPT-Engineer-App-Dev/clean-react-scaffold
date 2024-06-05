import { Box, Container, Stack, Text, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={4}
      mt={8}
    >
      <Container as={Stack} maxW={"6xl"} spacing={4} justify={"center"} align={"center"}>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© {new Date().getFullYear()} Your Company. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <IconButton
              as={Link}
              href={"https://www.facebook.com"}
              aria-label={"Facebook"}
              icon={<FaFacebook />}
            />
            <IconButton
              as={Link}
              href={"https://www.twitter.com"}
              aria-label={"Twitter"}
              icon={<FaTwitter />}
            />
            <IconButton
              as={Link}
              href={"https://www.linkedin.com"}
              aria-label={"LinkedIn"}
              icon={<FaLinkedin />}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;