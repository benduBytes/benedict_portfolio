"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Experienced in coding and developing  dynamic web applications using React.js, Next.js, and modern web technologies.",
    href: ""
  },
  {
    num: "02",
    title: "Java Development",
    description: "Oracle Certified Java Developer in building robust applications with Spring Boot, Hibernate, and RESTful APIs.",
    href: ""
  },
  {
    num: "03",
    title: "Mobile App Development",
    description: "Skilled in building responsive and feature-rich mobile applications using Android Studio and Flutter for diverse user needs.",
    href: ""
  },
  {
    num: "04",
    title: "AWS Solution Architect",
    description: "With expertise in designing and implementing scalable, secure, and cost-effective cloud solutions. Proficient in EC2, S3, RDS, VPC, Lambda, and more.",
    href: ""
  }
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1, // Changed from 0 to 1
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >

          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
