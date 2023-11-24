import {
  VStack,
  Text,
  Image,
  Link,
  Box,
  Center,
  keyframes,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Card6 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    <VStack
      // bg="#30475E"
      // p="1rem"
      // w="100vw"
      // h="100vh"
      align="center"
      justify="center"
      spacing="1rem"
      backgroundImage="static/dark/v2bg6.webp"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      border="2px solid white"
      // bg="#30475E"
      borderRadius="1rem"
      p="1rem"
      animation={zoomAnimation}
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        This was
      </Text>
      <Image h="80px" src="static/compress/logo2.webp" alt="OurChatStory" />
      <Text color="#F5F5F5" fontSize="4xl" align="center" pb="1rem">
        <b>OurChatStory</b>
      </Text>
      <Text color="#F5F5F5" fontSize="xl" align="center">
        While we create many more amazing stories together, let&apos;s share
        this with friends
      </Text>
      <Text color="#F5F5F5" fontSize="xl" align="center">
        Because every story is
        <br />
        unique and worth sharing
      </Text>
      <Box>
        <div className="shareLink">
          <div className="permalink">
            <input
              className="textLink"
              id="text"
              type="text"
              name="shortlink"
              value="Support us using UPI"
              readonly=""
              onClick={() => {
                // e.preventDefault();
                navigator.clipboard.writeText("divitagrawal@oksbi");
                document
                  .getElementById("copy")
                  .setAttribute("tooltip", "Copied!");
                  alert("UPI copied to clipboard")
              }}
            />
            <span className="copyLink" id="copy" tooltip="Copy to clipboard">
              <FaRegCopy />
            </span>
          </div>
        </div>
      </Box>
      <Box>
        <Button colorScheme="yellow" variant="outline">
          <Link
            textDecoration="underline"
            cursor="pointer"
            zIndex={10000}
            href="https://www.buymeacoffee.com/whatsappwrapped"
            target="_blank">
            Support us using BuyMeACoffee
          </Link>
        </Button>
      </Box>
      {/* <Box zIndex={10000}>
        <Text color="#F5F5F5" fontSize="sm" align="center">
          Made with ❤️ by
        </Text>
        <Text color="#F5F5F5" fontSize="sm" align="center">
          <Link
            textDecoration="underline"
            cursor="pointer"
            zIndex={10000}
            href="https://twitter.com/anshulagx"
            target="_blank"
          >
            @anshulagx
          </Link>{" "}
          &{" "}
          <Link
            zIndex={10000}
            textDecoration="underline"
            href="https://twitter.com/iamyajat"
            target="_blank"
          >
            @iamyajat
          </Link>
        </Text>
      </Box> */}
      {/* <Spacer /> */}
      <style jsx>{`
        .shareSocial {
          display: flex;
          flex-flow: row;
          align-items: center;
          margin-bottom: 30px;
          @media (max-width: 767px) {
            flex-flow: column;
          }
          .socialTitle {
            margin: 0 15px 0 0;
            font-size: 20px;
            @media (max-width: 767px) {
              margin-bottom: 15px;
              text-align: center;
            }
          }
          .socialList {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-start;
            justify-content: center;
            flex-flow: row wrap;
            li {
              margin: 5px;
              &:first-child {
                padding-left: 0;
              }
              a {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 100%;
                text-decoration: none;
                background-color: #999;
                color: #fff;
                transition: 0.35s;
                i {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform-origin: top left;
                  transform: scale(1) translate(-50%, -50%);
                  transition: 0.35s;
                }
                &:hover {
                  i {
                    transform: scale(1.5) translate(-50%, -50%);
                  }
                }
              }
              &:nth-child(1) a {
                background-color: #135cb6;
              }
              &:nth-child(2) a {
                background-color: #00aced;
              }
              &:nth-child(3) a {
                background-color: #bd081c;
              }
              &:nth-child(4) a {
                background-color: #111111;
              }
              &:nth-child(5) a {
                background-color: #1fb381;
              }
            }
          }
        }
        .shareLink {
          z-index: 10000;
          position: block !important;
          display: flex;
        }

        .shareLink {
          .permalink {
            cursor: pointer;
            z-index: 10000;
            position: relative;
            border-radius: 30px;
            .textLink {
              opacity: 0.5;
              text-align: center;
              padding: 12px 80px 12px 30px;
              height: 45px;
              width: 450px;
              font-size: 12px;
              letter-spacing: 0.3px;
              color: #494949;
              border-radius: 25px;
              border: 1px solid #f2f2f2;
              background-color: #f2f2f2;
              outline: 0;
              appearance: none;
              transition: all 0.3s ease;
              @media (max-width: 767px) {
                width: 100%;
              }
              &:focus {
                border-color: #d8d8d8;
              }
              &::selection {
                color: #fff;
                background-color: #ff0a4b;
              }
            }
            .copyLink {
              position: absolute;
              top: 50%;
              right: 25px;
              cursor: pointer;
              transform: translateY(-50%);
              &:hover {
                &:after {
                  opacity: 1;
                  transform: translateY(0) translateX(-50%);
                }
              }
              &:after {
                content: attr(tooltip);
                width: 140px;
                bottom: -40px;
                left: 50%;
                padding: 5px;
                border-radius: 4px;
                font-size: 0.8rem;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                background-color: #000000;
                color: #ffffff;
                transform: translateY(-10px) translateX(-50%);
                transition: all 300ms ease;
                text-align: center;
              }
              i {
                font-size: 20px;
                color: #ff0a4b;
              }
            }
          }
        }
      `}</style>
    </VStack>
  );
};

export default Card6;
