
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const URL1= "https://drive.google.com/file/d/1IHd7iEtmK1pnaZyxb7TJqahBPnh6d1lc/view?usp=sharing";
const URL2 = "https://drive.google.com/file/d/1H5DSvRNQbj1emvwLj5p7vXprPvSE1vyN/view?usp=sharing";
const URL3 = "";
const URL4 = ""
const URL5 = ""


const GITHUB1 = "https://github.com/benduBytes/Food_Delivery_App_SWIEE"
const GITHUB2 = ""
const GITHUB3 = "https://github.com/benduBytes/Bluetooth-Serial-Terminal-AndroidApp"
const GITHUB4 = "https://github.com/benduBytes/Pneumonia-Detection-Using-Deep-Learning"
const GITHUB5 = "https://github.com/benduBytes/Driver-Drowsiness-Alert-System"

const projects = [
  {
    num: '01',
    category: 'Android Mobile App',
    title: 'Single Vendor Food Application',
    description: "Developed a Single Vendor Food Application with user, vendor, and admin panels, featuring order management, menu updates, and admin oversight, along with Figma-designed green and red themes for veg and non-veg preferences, resulting in improvements to the user experience.",
    image: '/assets/work/FoodOrderingApp.png',
    live: `${URL1}`,
    github: `${GITHUB1}`,
  },
  {
    num: '02',
    category: 'AI-Powered Full-Stack',
    title: 'Recipe Finder System',
    description: "Developed a recipe generation feature that allows users to easily create personalized recipes based on their preferences, streamlining the cooking experience. Integrated social sharing and commenting functionalities, enabling users to engage with the community by sharing their recipes, discovering new ones.",
    image: '/assets/work/RecipeGeneratorSystem.png',
    live: `${URL2}`,
    github: `${GITHUB2}`,
  },
  {
    num: '03',
    category: 'Android Mobile App',
    title: 'Bluetooth Serial Terminal',
    description: "Developed a mobile app for seamless Arduino communication, featuring real-time moisture-based motor control to optimize irrigation. The app features programmable buttons, allowing users to easily control the system, and includes a prompt window for real-time data visualization and command execution.",
    image: '/assets/work/BluetoothTerminal.png',
    live: `${URL3}`,
    github: `${GITHUB3}`,
  },
  {
    num: '04',
    category: 'Machine Learning',
    title: 'Pneumonia Detection',
    description: "This project uses a Convolutional Neural Network (CNN) to extract features from chest X-rays and applies machine learning models for pneumonia detection. It combines CNN-based extraction with multiple ML models for accurate classification, aiding healthcare professionals in accurate diagnosis.",
    image: '/assets/work/PneumoniaDetection.png',
    live: `${URL4}`,
    github: `${GITHUB4}`,
  },
  {
    num: '05',
    category: 'Machine Learning',
    title: 'Driver Drowsiness Alert System',
    description: "The Driver Drowsiness Alert System monitors eye movements in real-time, using computer vision to detect drowsiness. A pre-trained Haar Cascade classifier detects eyes, while a convolutional neural network (CNN) classifies eye states as open or closed. The system features dynamic video capture and a user-friendly interface.",
    image: '/assets/work/DriverDrowsiness.png',
    live: `${URL5}`,
    github: `${GITHUB5}`,
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"}}} 
    className="min-h-[80vh] flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60 text-justify">{project.description}</p>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">


                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>


              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[24px] flex justify-center items-center transition-all rounded-full" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;