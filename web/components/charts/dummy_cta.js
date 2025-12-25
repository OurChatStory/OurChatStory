import {
  Text,
  VStack,
  HStack,
  Box,
  Button,
  Link,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const DummyCTA = ({ drawData, setShowUploader }) => {
  return (
    <VStack
      spacing="3vh"
      align="center"
      justify="center"
      w="100%"
      h="78vh"
      bgColor="transparent"
      borderRadius="1rem"
      p="1rem"
      pb="10vh"
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        left="-5%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(37, 211, 102, 0.03)"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        right="-5%"
        w="150px"
        h="150px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.02)"
        animate={{ scale: [1, 1.1, 1], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        zIndex={0}
      />

      <MotionText
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        color="#8696a0"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
        zIndex={1}
      >
        Your turn!
      </MotionText>

      <MotionBox
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        maxW="85%"
        zIndex={1}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          color="white"
          fontWeight="900"
          textAlign="center"
          lineHeight="1.2"
        >
          Create Your Own
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        maxW="85%"
        zIndex={1}
      >
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          color="#e9edef"
          fontWeight="400"
          textAlign="center"
          lineHeight="1.5"
        >
          Discover your unique chat story and see your relationship unfold through data
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        mt={6}
        w="85%"
        maxW="350px"
        zIndex={1}
      >
        <Button
          as={motion.button}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setShowUploader(true);
            document.body.style.overflow = "hidden";
          }}
          w="100%"
          bg="#25d366"
          color="#111b21"
          size="lg"
          h="auto"
          py={4}
          px={6}
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="700"
          borderRadius="12px"
          boxShadow="0 2px 8px rgba(0,0,0,0.15)"
          _hover={{
            bg: "#20bd5a",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
          _active={{
            bg: "#1fa952",
          }}
          transition="all 0.2s ease"
        >
          Make yours now
        </Button>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        mt={4}
        zIndex={1}
      >
        <HStack spacing={4}>
          <IconButton
            as={motion.a}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://twitter.com/ourchatstory"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            icon={<FaTwitter size="1.5em" color="#1DA1F2" />}
            variant="none"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="full"
            p={3}
            _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
          />
          <IconButton
            as={motion.a}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/ourchatstory.co/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            icon={<FaInstagram size="1.5em" color="#E4405F" />}
            variant="none"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="full"
            p={3}
            _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
          />
        </HStack>
      </MotionBox>

      <MotionBox
        as="a"
        href="https://www.buymeacoffee.com/whatsappwrapped"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        mt={4}
        zIndex={1}
      >
        <Image
          h={10}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        mt={6}
        px={6}
        py={3}
        maxW="90%"
        zIndex={1}
      >
        <Text
          fontSize="xs"
          color="#8696a0"
          textAlign="center"
          lineHeight="1.6"
        >
          <Text as="span" fontWeight="bold" color="#e9edef" textTransform="uppercase" fontSize="2xs">
            100% Private • No data stored
          </Text>
          <br />
          <Text as="span" fontSize="2xs">
          Check our{" "}
          <Link
            style={{ textDecoration: "underline", color: "#25d366" }}
            href="/privacy"
          >
            privacy
          </Link>
          {" "}•{" "}
          <Link
            style={{ textDecoration: "underline", color: "#25d366" }}
            href="/blogs"
          >
            blogs
          </Link>
          {" "}•{" "}
          <Link
            style={{ textDecoration: "underline", color: "#25d366" }}
            href="https://github.com/OurChatStory/OurChatStory"
          >
            code
          </Link>
          </Text>
        </Text>
      </MotionBox>
    </VStack>
  );
};

export default DummyCTA;
