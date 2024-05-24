"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";

const infoIcons = {
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
  map: <FaMapMarkerAlt />,
};

const AnimatedContact = ({ slice }) => {
  const ContactForm = () => {
    const [state, handleSubmit, reset] = useForm("mrgnvaad");

    if (state.submitting) {
      return <p>Submitting...</p>;
    }

    if(state.errors) {
      return <p>Submit Failed!</p>
    }

    if (state.succeeded) {
      return (
        <div>
          <p>Thanks for joining!</p>
          <button onClick={reset}>Reset</button>
        </div>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
      >
        <h3 className="text-4xl text-accent">{slice.primary.title}</h3>
        <p className="text-white/60">{slice.primary.description}</p>

        {/* input */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input type="firstname" placeholder="First Name" id="fname" />
          <Input type="lastname" placeholder="Last Name" id="lname" />
          <Input type="email" placeholder="Email Address" id="email" />
          <Input type="phone" placeholder="Phone Number" id="phone" />
        </div>

        {/* select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="app">App Development</SelectItem>
              <SelectItem value="uiux">UI/UX Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* textarea */}
        <Textarea
          className="h-[200px]"
          placeholder="Type your message here."
          id="message"
        />

        {/* btn */}
        <Button size="md" className="max-w-40" disabled={state.submitting}>
          {slice.primary.button_text}
        </Button>
      </form>
    );
  };
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <ContactForm />
          </div>

          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {slice.items.map((info, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[28px]">
                      {infoIcons[info.info_icon]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{info.info_title}</p>
                    <h3 className="text-xl">{info.info_value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedContact;
