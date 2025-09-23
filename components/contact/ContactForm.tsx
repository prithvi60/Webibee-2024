"use client";

import { FormEvent, useEffect, useState } from "react";
import Loader from "../Loader";
import { motion } from "framer-motion";
import { variantContact, variantTitle } from "@/libs/Variants";
import { usePathname } from "next/navigation";


const initialFormData = {
    userName: "",
    firstName: "",
    lastName: "",
    designation: "",
    phoneNo: "",
    userEmail: "",
    companyName: "",
    message: "",
    source: ""
};

const ContactForm = ({
    seo,
    blog,
    lge,
}: {
    seo?: boolean;
    blog?: boolean;
    lge?: boolean;
}) => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);
    const path = usePathname()
    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const leadSource = path.split("/")[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    // console.log(path.split("/")[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(true);
        // console.log(formData);

        const emailFormData = {
            userName: formData.userName,
            firstName: formData.firstName,
            lastName: formData.lastName,
            designation: formData.designation,
            userEmail: formData.userEmail,
            phone: formData.phoneNo,
            companyName: formData.companyName,
            message: formData.message,
            source: `${leadSource} - Website`
        };

        const zohoData = {
            data: [
                {
                    First_Name: formData.firstName,
                    Last_Name: formData.lastName,
                    Mobile: formData.phoneNo,
                    Email: formData.userEmail,
                    Organization: formData.companyName,
                    message: formData.message,
                    Description: `${leadSource} - Website`,
                },
            ],
        };

        try {
            if (lge) {
                const zohoResponse = await fetch("/api/zoho/contacts", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(zohoData),
                });

                if (!zohoResponse.ok) {
                    const errorData = await zohoResponse.text();
                    throw new Error(`Zoho API Error: ${zohoResponse.status} ${errorData}`);
                }
                // console.log(zohoResponse, zohoData);

            }

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
                {
                    path === "/lead-generation-engine"
                        ? (window.location.href = "/lead-generation-engine/thankyou")
                        : (window.location.href = "/thankyou");
                }
            } else {
                throw new Error("operations failed.");
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
    };

    return (
        <motion.form
            variants={variantContact}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            className={`w-full ${!blog ? "" : "md:sticky md:top-5 lg:mt-16 "} ${seo && "bg-white "}`}
            onSubmit={handleSubmit}
        >
            {/* {seo && (
                <h3 className="bg-info/80 text-center font-bold tracking-wide mb-6 text-white rounded-lg px-5 py-3">
                    Get In Touch
                </h3>
            )} */}
            <div className="flex flex-col gap-6">
                {
                    !lge && (
                        <input
                            type="text"
                            placeholder="Full Name*"
                            name="userName"
                            value={formData.userName || ""}
                            onChange={handleChange}
                            required
                            className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                        />
                    )
                }

                {lge && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name*"
                            name="firstName"
                            value={formData.firstName || ""}
                            onChange={handleChange}
                            required
                            className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                        />
                        <input
                            type="text"
                            placeholder="Last Name*"
                            name="lastName"
                            value={formData.lastName || ""}
                            onChange={handleChange}
                            required
                            className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                        />
                        <input
                            type="text"
                            placeholder="Business Name*"
                            name="companyName"
                            value={formData.companyName || ""}
                            onChange={handleChange}
                            required
                            className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                        />
                    </>
                )}

                <input
                    type="email"
                    placeholder="Email*"
                    name="userEmail"
                    value={formData.userEmail || ""}
                    onChange={handleChange}
                    required
                    className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                />

                {!seo && (
                    <>
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
                    </>
                )}
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
                    placeholder={`${lge ? "Any Specific Need of Service?" : "Message"} `}
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                />
                <button
                    type="submit"
                    title="submit"
                    className="bg-info/80 text-white font-SourceCodePro font-medium text-base sm:text-lg xl:text-xl p-2 rounded-md hover:bg-info active:bg-neutral-700"
                >
                    {status ? <Loader /> : "Submit"}
                </button>
            </div>
        </motion.form>
    );
};

export default ContactForm;
