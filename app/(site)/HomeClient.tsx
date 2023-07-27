import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import RotatingCircle from "@/components/RotatingCircle";
import Image from "next/image";
import Footer from "@/components/Footer";
import Stack from "../../assets/Stack.png";
import Stack1 from "../../assets/Stack1.png";
import Box from "@/components/Box";
import "../../components/card.css";
import Cards from "@/components/Card";
import JoinWaitList from "@/components/JoinWaitList";

const HomeClient = () => {
  
  
  return (
    <div className="my-8 mx-4">
      {/* heading */}
      <div className="flex items-center flex-col justify-center w-[80vw] mx-auto gap-y-12">
        <div className="text-6xl text-center text gradient_h ">
          Integrate AI Throughtout Your Workflow
        </div>
        <div className="text-5xl">Code Doctor</div>
        <div className="text-xl text-center">
          Make processes where AI collaborates with your team throughout the
          whole development process
        </div>
      </div>

      {/* waitlist input form */}
      {/* <div
        className="flex flex-row w-fit mx-auto mt-16 p-4 rounded-lg"
        style={{
          borderImage:
            "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
          borderImageSlice: 1,
          borderRadius: "10px !important",
          borderWidth: "2px",
        }}
      >
        <Input
          className="w-fit border border-transparent bg-black"
          placeholder="Your Email"
        />
        <Button className="border border-white font-light rounded-full p-3 ">
          JOIN WAITLIST
        </Button>
      </div> */}
      <JoinWaitList />

      {/* home page photo */}
      <div className="relative w-full h-[80vh] mt-16">
        <Image
          src="/images/main.svg"
          alt="group"
          className="object-cover "
          fill
        />

        <Image
          src="/images/Group.svg"
          alt="group"
          className="object-cover blur-3xl"
          fill
        />
      </div>

      {/* second heading */}
      <div className="flex items-center justify-center gap-y-6 flex-col w-[80vw] mx-auto mt-16">
        <div className="text-center text-5xl gradient_h">
          Boost the speed of your development and test cycles.
        </div>
        <div className="text-center text-2xl">
          With Ai-driven test case generation and code analysis, problems, may
          be found and fixed more quickly.
        </div>
      </div>

      {/* features */}
      <div className="relative mt-20 h-[70vh] w-[80vw] mx-auto">
        <div className="absolute top-10 left-10">
          <div className="flex p-7 divide-y rounded-md  bg-[#181924] flex-col pl-1  pr-10">
            <Box imageSrc={Stack.src} text="CI/CD Pipeline Generate" />
            <Box imageSrc={Stack1.src} text="Build / Deployment" />
          </div>
        </div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center">
            <RotatingCircle />
          </div>
        </div>

        <div className="absolute bottom-10 right-10">
          <div className="p-7 divide-y rounded-md  bg-[#181924] flex-col pl-1 pr-10">
            <Box imageSrc={Stack.src} text="CI/CD Pipeline Generate" />
            <Box imageSrc={Stack1.src} text="Build / Deployment" />
          </div>
        </div>
      </div>

      {/* Use AI to handle workflows in your chat platforms. */}
      <div className="mt-20">
        <Cards />
      </div>

      {/* footer? */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeClient;

// background: linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%);
