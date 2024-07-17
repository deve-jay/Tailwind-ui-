import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SlArrowRight } from "react-icons/sl";
import { FaDev } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const App = () => {
  return (
    <>
      <div className="h-[100vh] w-full bg-zinc-900 px-4 py-12  text-zinc-50">
        <div className=" mx-auto max-w-4xl grid-flow-dense gap-4 grid grid-cols-12">
          <HeaderBlock />
          <SocialBlock />
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </div>
      </div>
    </>
  );
};

export default App;

type prop = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: prop) => {
  return (
    <motion.div
      className={twMerge(
        " col-span-4 bg-zinc-800 rounded-lg p-6 border border-zinc-700",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block
      className="
    col-span-12 row-span-2 md:col-span-6
    "
    >
      <img
        src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&backgroundType=gradientLinear&backgroundRotation=360,0"
        alt="avatar"
        className=" rounded-full size-14 mb-4"
      />
      <h1 className="text-4xl font-meadium mb-12 leading-tight">
        Hi I'm Jay {"    "}
        <span className="text-zinc-400 font-normal text-4xl leading-tight">
          I build cool websites like this one
        </span>
      </h1>
      <h3 className="flex item-center gap-1 text-red-300 text-sm hover:underline cursor-pointer">
        contact me <SlArrowRight className="text-red-300 text-lg" />
      </h3>
    </Block>
  );
};

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          scale: 1.1,
          rotate: 3.4,
        }}
        className="col-span-6 bg-rose-500 md:col-span-3"
      >
        <h4 className="grid h-full place-content-center text-3xl">
          <FaDev />
        </h4>
      </Block>
      <Block
        whileHover={{
          scale: 1.1,
          rotate: -3.4,
        }}
        className="col-span-6 bg-green-500 md:col-span-3"
      >
        <h4 className="grid h-full place-content-center text-3xl">
          <FaGithub />
        </h4>
      </Block>
      <Block
        whileHover={{
          scale: 1.1,
          rotate: 3.4,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <h4 className="grid h-full place-content-center text-3xl">
          <SiTwitter />
        </h4>
      </Block>
      <Block
        whileHover={{
          scale: 1.1,
          rotate: -3.4,
        }}
        className="col-span-6 bg-purple-500 md:col-span-3"
      >
        <h4 className="grid h-full place-content-center text-3xl">
          <AiFillInstagram />
        </h4>
      </Block>
    </>
  );
};
