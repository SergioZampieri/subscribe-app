"use client";

import postEmail from "@/utils/mail.service";

import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    postEmail(data.email);
  };

  return (
    <div className="w-full">
      <AnimatePresence>
        {isSubmitSuccessful ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={"motion.p"}
            className="min-w-[70%] border-b-2 border-gray pb-4 text-center text-2xl decoration-gray">
            Thanks for subscribing!
          </motion.p>
        ) : (
          <motion.form
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            layout
            key={"motion.form"}
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="min-w-full border-b-2 border-gray pb-4 text-lg decoration-gray focus:outline-none md:min-w-[70%]"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && typeof errors.email.message === "string" && (
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="motion-translate-y-in-100 px-10 py-1 text-sm text-error">
                {errors.email.message}
              </motion.p>
            )}
            <button type="submit" className="mt-20 rounded-full bg-lime px-16 py-3 font-bold text-black hover:bg-pear">
              SUBSCRIBE
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
