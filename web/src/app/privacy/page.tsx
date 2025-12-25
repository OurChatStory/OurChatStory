import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function PrivacyPage() {
  return (
    <div className="m-0 p-4 text-white bg-black min-h-screen font-sans overflow-y-auto">
      <Link
        href="/"
        className="fixed top-[4vh] right-[2vw] p-2 bg-black text-white border-0 z-[102] cursor-pointer hover:opacity-80"
      >
        <IoClose size="1.5em" opacity={0.8} />
      </Link>

      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold my-5">
          Thank you for considering our WhatsApp message analysis tool!
        </h1>
        <p className="my-2.5">
          Your privacy is of the utmost importance to us, and we want to assure you that we take
          every precaution to protect it.
        </p>

        <h2 className="text-xl font-semibold my-5">Our tool is open-source</h2>
        <p className="my-2.5">
          Our tool is an open-source project, which means that the code is available for anyone to
          view and verify. This ensures that our processing is transparent and secure, and that you
          can trust that your data is handled in accordance with our strict privacy policy.
        </p>

        <h2 className="text-xl font-semibold my-5">WE DON'T OWN A DATABASE</h2>
        <p className="my-2.5">
          OurChatStory servers does not connect to a database and hence we have a
          ZERO-DATA-STORAGE-POLICY. When you use our tool, our server get your WhatsApp messages in
          order to perform the analysis. However, we do not store any of your personal data or
          messages on our servers, and all messages are processed and the insights are sent
          immediately after the analysis is complete. This means that your messages remain private
          and confidential at all times. Some parts of the generated meta-data numbers are recorded
          after the analysis for product improvements, but this data is not linked to your messages
          in any way. The wordcloud is not recorded.
        </p>

        <h2 className="text-xl font-semibold my-5">We use secure encryption methods</h2>
        <p className="my-2.5">
          We use secure encryption methods to protect your data while it is being transmitted to
          our servers, and we do not share your data with any third parties.
        </p>

        <h2 className="text-xl font-semibold my-5">We use Google Analytics</h2>
        <p className="my-2.5">
          We use Google Analytics to monitor usage of our tool. This helps us understand how our
          users are interacting with the tool, so we can improve the user experience and make sure
          the tool is meeting their needs. However, we do not share any personal information with
          Google Analytics or any other third parties.
        </p>

        <h2 className="text-xl font-semibold my-5">Contact us</h2>
        <p className="my-2.5">
          If you have any questions or concerns about our privacy policy, please do not hesitate to
          contact us. Thank you for using our tool.
        </p>
      </div>
    </div>
  );
}
