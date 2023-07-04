'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Input from "../utils/Input";
import Heading from "../utils/Heading";
import Button from "../utils/Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    })
      .then((res) => {
        if (!res || res.error) {
          toast.error('Authentication Failed')
          // console.log('User not found or authentication failed');
          
        } else {
          toast.success('Logged in Successfully')
          router.refresh()
          router.push('/Student')
          loginModal.onClose()
          // console.log('User authenticated');
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('An error occurred during authentication:', error);
      });
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      
      <div className="
      text-neutral-500 text-center mt-4 font-medium">
        <p>First time using Edu Plt4m? 
          <span 
            onClick={onToggle} 
            className=" pl-2
              font-bold
              text-green-700
              cursor-pointer 
              hover:underline
            "
            >Create an account</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;