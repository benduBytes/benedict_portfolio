"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 73063 87983"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "benedict1426paul@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Ernakulam, Kerala, India"
  },
]

const Contact = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    // Example: Display the form data in the console
    // console.log(formData);

    // Include access key in the form data
    const formDataWithKey = {
      ...formData,
      access_key: process.env.NEXT_PUBLIC_ACCESS_KEY// Use environment variable
    };

    // Example: Send the form data using fetch
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataWithKey)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Additional logic after successful form submission
      setFormData(initialFormState); // Reset the form fields
    })
    .catch(error => {
      console.error('Error:', error);
      // Logic for handling errors
    });
  };


  return (
    <motion.section 
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:w-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={submitForm}>
              <h3 className="text-4xl text-accent">Get in Touch</h3>
              <p className="text-white/60">Let's connect! If you're looking for a committed and skilled Software Developer, I am ready to contribute to your team's success.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Portfolio Development"> Portfolio Development</SelectItem>
                    <SelectItem value="Web Development"> Web Development</SelectItem>
                    <SelectItem value="Full Stack Development"> Full Stack Development</SelectItem>
                    <SelectItem value="Java Development"> Java Development</SelectItem>
                    <SelectItem value="Android App Development"> Android App Development</SelectItem>
                    <SelectItem value="Game Development"> Game Development</SelectItem>
                    <SelectItem value="AI/ML Development">AI/ML Development</SelectItem>
                    <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
