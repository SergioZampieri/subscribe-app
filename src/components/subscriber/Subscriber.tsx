"use client";

import { Form } from "../form/Form";
import { Send } from "../svg";
import { motion } from "motion/react";

export function Subscriber() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.3 },
      }}
      className="flex w-[85%] flex-col items-center justify-around gap-20 rounded-[50px] bg-white p-16 shadow-lg md:w-[65%]">
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.55 }} className="size-14">
        <Send className="size-full" />
      </motion.div>
      <motion.p className="text-3xl font-bold">SUBSCRIBE</motion.p>
      <Form />
    </motion.section>
  );
}
