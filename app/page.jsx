import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// import Link from "next/link";


const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-accent">Benedict Paul</span>
            </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I excel in coding and developing cutting-edge web and mobile applications using React.js and Python. Proficient in multiple programming languages and advanced technologies. Certified Full-Stack Developer and AWS Solutions Architect Associate with expertise in building scalable solutions. Hands-on experience in crafting seamless user experiences and secure, efficient architectures.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
          <a href="/assets/resume/Benedict_Paul_Resume.pdf" download="Benedict_Paul_Resume.pdf">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              Download CV
              {/* <Link href='/assets/resume/Resume.pdf' target="_blank">Download CV</Link> */}
              <FiDownload className="text-xl"/>
            </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
}

export default Home;