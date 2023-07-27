"use client";

import Button from "./ui/Button";
import Input from "./ui/Input";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Should be minimum of 1 lenght",
    })
    .email({ message: "Invalid email" }),
});

const JoinWaitList = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/join-waitlist", values);

      toast.success("Subscribed");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      reset();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errors && errors.email && errors.email.message) {
      toast.error(errors.email.message);
    }
  }, [errors]);
  return (
    <div
      className="flex flex-row w-fit mx-auto mt-16 p-4 rounded-lg"
      style={{
        borderImage:
          "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
        borderImageSlice: 1,
        borderRadius: "10px !important",
        borderWidth: "2px",
      }}
    >
      <form
        className="flex flex-row w-fit"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className="w-fit border border-transparent bg-black"
          placeholder="Your Email"
          {...register("email", { required: true })}
          disabled={loading}
        />
        <Button
          disabled={loading}
          type="submit"
          className="border border-white font-light rounded-full p-3 "
        >
          JOIN WAITLIST
        </Button>
      </form>
    </div>
  );
};

export default JoinWaitList;
