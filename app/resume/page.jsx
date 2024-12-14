"use client";

import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiMongodb , SiMysql, SiGraphql, SiSpringboot, SiExpress, SiKubernetes, SiHibernate, SiPhp, SiDotnet, SiCsharp  } from "react-icons/si";

const about = {
  title: 'About me',
  description: "I am a final-year Computer Science student at Vellore Institute of Technology with a passion for machine learning and building transformative digital experiences. As a Certified Solution Architect and Full-Stack Developer, I specialize in creating secure, scalable architectures and seamless user experiences. I’m always eager to collaborate with like-minded professionals and explore new opportunities in the tech world.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Benedict Paul"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 73063 87983"
    },
    {
      fieldName: "Experience",
      fieldValue: "4 Months"
    },
    {
      fieldName: "Email",
      fieldValue: "benedict1426paul@gmail.com"
    },
    {
      fieldName: "Residence",
      fieldValue: "Indian"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Malayalam"
    }
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "I’m a final-year Computer Science student at Vellore Institute of Technology specializing in machine learning. I’m passionate about developing technology that enhances user experiences and meets real-world needs through seamless, functional designs.",
  items: [
    {
      company: "Google Developers Group",
      position: "Google Cloud Innovator",
      duration: "Dec 2024 - Present",
      certificate: '/assets/resume/GoogleCloudInnovator.png'
    },
    {
      company: "IAENG",
      position: "Contributor, IAENG Society of Artificial Intelligence",
      duration: "Jul 2024 - Present",
      certificate: '/assets/resume/IAENG_SocietyOfArtificialIntelligence.png'
    },
    {
      company: "Andhra Pradesh State Development Corporation",
      position: "Data Analyst",
      duration: "Feb 2024 - May 2024",
      certificate: '/assets/resume/Ads.png'
    },
    {
      company: "InTrain Tech",
      position: "AI/ML Intern",
      duration: "Oct 2023 - Nov 2023",
      certificate: '/assets/resume/InTrain_Tech.png'
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  items: [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor's in Engineering - CSE",
      duration: "2021 - 2025",
      certificate: '/assets/resume/Engineering.png'
    },
    {
      institution: "Vijayagiri Public School, CBSE",
      degree: "High School PCMB",
      duration: "2019 - 2021",
      certificate: '/assets/resume/HSE.png'
    },
    {
      institution: "Naipunnya Public school Edakkunnu, CBSE",
      degree: "Pre Primary - Secondary",
      duration: "2007 - 2019",
      certificate: '/assets/resume/SSE.png'
    },
  ]
};

const skills = {
  title : "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Ecpress.js',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiDotnet />,
      name: '.NET',
    },
    {
      icon: <SiCsharp />,
      name: 'C#',
    },
    {
      icon: <SiSpringboot />,
      name: 'Spring Boot',
    },
    {
      icon: <FaGit />,
      name: 'Git',
    },
    {
      icon: <SiVisualstudiocode />,
      name: 'VS Code',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
    },
    {
      icon: <FaAws />,
      name: 'AWS',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
    },
  ]

}

const onlinecourses = {
  title: 'Online Course Certifications',
  items: [
    {
      certificate: '/assets/resume/AWS_Certified_Solutions_Architect_Associate.png',
      name: 'AWS Solutions Architect',
    },
    {
      certificate: '/assets/resume/Java_Foundations_Associate.png',
      name: 'ORACLE Java Foundations Associate',
    },
    {
      certificate: '/assets/resume/Cybersecurity_Essentials.png',
      name: 'CISCO Cybersecurity Essentials',
    },
    {
      certificate: '/assets/resume/exX_Databases_RelationalDatabasesAndSQL.png',
      name: 'edX Relational Databases And SQL',
    },
    {
      certificate: '/assets/resume/NIT_Pragyan.png',
      name: 'NIT Pragyan Campus Ambassador 2024',
    },
    {
      certificate: '/assets/resume/HackerRank_Software_Engineer.png',
      name: 'HackerRank Software Engineer',
    },
    {
      certificate: '/assets/resume/HackerRank_Java.png',
      name: 'HackerRank Java',
    },
    {
      certificate: '/assets/resume/DSA_iamNEO.png',
      name: 'iamNEO DSA',
    },
    {
      certificate: '/assets/resume/Startup_Idea_Pitching_Contest.png',
      name: 'VIT Startup Idea Pitching Contest',
    },
    {
      certificate: '/assets/resume/AWSBOS.png',
      name: 'AWS Builders Online Series',
    },
    {
      certificate: '/assets/resume/Canva_50_Design_Milestone.png',
      name: 'Canva Design',
    },{
      certificate: '/assets/resume/Udemy_AWS_SAA-CO3.png',
      name: 'Udemy AWS SAA-CO3',
    },
    {
      certificate: '/assets/resume/ServerlessApps.png',
      name: 'Google Cloud Serverless Apps',
    },
    {
      certificate: '/assets/resume/AppEngine3.png',
      name: 'Google Cloud App Engine: 3',
    },
    {
      certificate: '/assets/resume/SpeechAPI3.png',
      name: 'Google Cloud Speech API: 3',
    },
    {
      certificate: '/assets/resume/NetworkingFundamentals.png',
      name: 'Google Cloud Networking Fundamentals',
    },
    {
      certificate: '/assets/resume/PromptDesign.png',
      name: 'Google Cloud Prompt Design',
    },
    {
      certificate: '/assets/resume/DevelopGenAIApps.png',
      name: 'Google Cloud Develop GenAI Apps',
    },
    {
      certificate: '/assets/resume/PubSub.png',
      name: 'Google Cloud PubSub',
    },
    {
      certificate: '/assets/resume/CloudStorage.png',
      name: 'Google Cloud Cloud Storage',
    },
    {
      certificate: '/assets/resume/Looker.png',
      name: 'Google Cloud Looker',
    },
    {
      certificate: '/assets/resume/APIGateway.png',
      name: 'Google Cloud API Gateway',
    },
    {
      certificate: '/assets/resume/ManageKubernetes.png',
      name: 'Google Cloud Manage Kubernetes',
    },
    {
      certificate: '/assets/resume/DeployKubernetes.png',
      name: 'Google Cloud Deploy Kubernetes',
    },
  ],
};

const achievements = {
  title: 'Achievements',
  items: [
    {
      certificate: '/assets/resume/Oracle_JavaExplorer.png',
      name: 'Oracle Java Explorer',
    },
    {
      certificate: '/assets/resume/cloudskillsboost.png',
      name: 'Google Cloud Skills Boost',
    },
    {
      certificate: '/assets/resume/Leetcode100.png',
      name: 'Leetcode 100',
    },
    {
      certificate: '/assets/resume/LeetcodeSQL.png',
      name: 'Leetcode SQL',
    },
    {
      certificate: '/assets/resume/LeetcodeNOV24.png',
      name: 'Leetcode NOV24',
    },
    {
      certificate: '/assets/resume/LeetcodeOCT24.png',
      name: 'Leetcode OCT24',
    },
    {
      certificate: '/assets/resume/LeetcodeSEP24.png',
      name: 'Leetcode SEP24',
    },
    {
      certificate: '/assets/resume/LeetcodeAUG24.png',
      name: 'Leetcode AUG24',
    },
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration:0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6">
            <TabsTrigger value= "experience">Experience</TabsTrigger>
            <TabsTrigger value= "education">Education</TabsTrigger>
            <TabsTrigger value= "skills">Skills</TabsTrigger>
            <TabsTrigger value="onlinecourses">Certifications</TabsTrigger>
            <TabsTrigger value="achievements">Achievement</TabsTrigger>
            <TabsTrigger value= "about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">


            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3> 
                <ScrollArea className="h-[550px]">
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify ">{experience.description}</p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}>
                            {hoveredIndex === index && item.certificate && (
                          <div className="relative h-[160px] flex justify-center items-center">
                            <img src={item.certificate} alt="Certificate" className="w-full h-full rounded-xl object-cover" />
                          </div>
                          )}
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}>
                            {hoveredIndex === index && item.certificate && (
                          <div className="relative h-[160px] flex justify-center items-center">
                            <img src={item.certificate} alt="Certificate" className="w-full h-full rounded-xl object-cover" />
                          </div>
                          )}
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold mb-10">{skills.title}</h3>
                </div>
                <ScrollArea className="h-[550px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item,index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="onlinecourses" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold mb-10">{onlinecourses.title}</h3>
        </div>
        <ScrollArea className="h-[550px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[30px]">
          {onlinecourses.items.map((item, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <img src={item.certificate} alt={item.name} className="w-full h-full rounded-xl object-cover" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
        </ScrollArea>
      </div>
            </TabsContent>


            <TabsContent value="achievements" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold mb-10">{achievements.title}</h3>
    </div>
    <ScrollArea className="h-[550px]">
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[30px]">
      {achievements.items.map((item, index) => {
        return (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[200px] h-[200px] bg-white rounded-xl flex justify-center overflow-hidden items-center group">
                  <img src={item.certificate} alt={item.name} className="w-full h-fit rounded-xl object-cover" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        );
      })}
    </ul>
    </ScrollArea>
  </div>
</TabsContent>




            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume