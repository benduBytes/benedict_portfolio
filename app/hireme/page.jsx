"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const HireMe = () => {
    const initialFormState = {
        name: "",
        companyname: "",
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


    const submitForm = (event) => {
        event.preventDefault();

        // Display the form data in the console
        // console.log(formData);

        // Include access key in the form data
        const formDataWithKey = {
            ...formData,
            access_key: process.env.NEXT_PUBLIC_ACCESS_KEY
        };

        // Send the form data using fetch
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
                // Reset the form fields
                setFormData(initialFormState);
            })
            .catch(error => {
                console.error('Error:', error);
                // Logic for handling errors
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    {/* <h1 className="text-5xl font-bold text-accent mb-4">Hire Me</h1> */}
                    <p className="text-white/80 text-lg">Looking for a committed and skilled Software Developer? Let's work together to bring your vision to life!</p>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl text-accent mb-4">My Skills</h2>
                        <ul className="list-disc list-inside text-white/80">
                            <li>React.js & Next.js Development</li>
                            <li>Full Stack Web Development</li>
                            <li>HTML5, CSS3, JavaScript, TypeScript, and Tailwind CSS</li>
                            <li>Database Management (SQL & NoSQL)</li>
                            <li>VS Code, Git, Postman, Jenkins, Docker, ESLint</li>
                            <li>AWS Solutions Architect</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl text-accent mb-4">Services Offered</h2>
                        <ul className="list-disc list-inside text-white/80">
                            <li>Web Development</li>
                            <li>Full Stack Development</li>
                            <li>Java Development</li>
                            <li>Cloud Solutions (AWS)</li>
                            <li>Technical Consultation</li>
                        </ul>
                    </div>
                </div> */}

                <div className="mt-16">
                    <h2 className="text-3xl text-accent mb-4 text-center">Let's work together...</h2>
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={submitForm}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                            <Input type="text" name="companyname" placeholder="Company" value={formData.companyname} onChange={handleChange} />
                            <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                            <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                        </div>

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
            </div>
        </motion.section>
    );
}

export default HireMe;
