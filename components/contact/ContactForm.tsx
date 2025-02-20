"use client";

import { FormEvent, useState } from "react";
import Loader from "../Loader";
import { motion } from "framer-motion";
import { variantContact, variantTitle } from "@/libs/Variants";

const initialFormData = {
    userName: "",
    designation: "",
    phoneNo: "",
    userEmail: "",
    companyName: "",
    message: "",
};

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(true);
        // console.log(formData);

        const emailFormData = {
            userName: formData.userName,
            designation: formData.designation,
            userEmail: formData.userEmail,
            phone: formData.phoneNo,
            companyName: formData.companyName,
            message: formData.message,
        };

        try {
            const emailResponse = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailFormData),
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.text();
                throw new Error(
                    `Email API Error: ${emailResponse.status} ${errorData}`
                );
            }
            const emailDataResult = await emailResponse.json();

            if (emailDataResult.success) {
                setStatus(false);
                setFormData(initialFormData);
                (e.target as HTMLFormElement).reset();
                window.location.href = "/thankyou";
            } else {
                throw new Error("operations failed.");
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
    };

    return (
        <section className="w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row gap-20 items-center">
            <motion.div
                variants={variantTitle}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate" className="w-full md:w-2/5 space-y-7 md:space-y-14">
                <h3 className="font-EbGaramond font-medium text-5xl sm:text-7xl xl:text-8xl ">
                    Let’s <strong className="text-info">talk</strong>
                </h3>
                <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                    Have a project to discuss?
                    <br /> Looking to partner with us?
                </p>
                <p className="font-SourceCodePro font-normal text-sm sm:text-base">
                    Drop us a line...
                </p>
            </motion.div>
            <motion.form
                variants={variantContact}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate" className="w-full md:w-3/5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Full Name*"
                        name="userName"
                        value={formData.userName || ""}
                        onChange={handleChange}
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="email"
                        placeholder="Email Address*"
                        name="userEmail"
                        value={formData.userEmail || ""}
                        onChange={handleChange}
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Company*"
                        name="companyName"
                        value={formData.companyName || ""}
                        onChange={handleChange}
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Department*"
                        name="designation"
                        value={formData.designation || ""}
                        onChange={handleChange}
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Phone number*"
                        name="phoneNo"
                        value={formData.phoneNo || ""}
                        onChange={handleChange}
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <textarea
                        rows={5}
                        placeholder="Message"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <button className="bg-info/80 text-white font-SourceCodePro font-medium text-base sm:text-lg xl:text-xl p-2 rounded-md hover:bg-info active:bg-neutral-700">
                        {status ? <Loader /> : "Submit"}
                    </button>
                </div>
            </motion.form>
        </section>
    );
};

export default ContactForm;
