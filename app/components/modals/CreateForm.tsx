'use client';

// import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../utils/Input";
import Heading from "../utils/Heading";
import Button from "../utils/Button";
import useFormModal from "@/app/hooks/useFormModal";
import RoleSelector from "../utils/RoleSelector";

const CreateFormModal= () => {

  const FormModal = useFormModal();
//   const registerModal = useRegisterModal();
//   const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
    setValue
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    console.log(data);
    
  }

  const onToggle = useCallback(() => {
    FormModal.onClose();
    // loginModal.onOpen();
  }, [FormModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account!"
      /> */}
        <Input
          id="name"
          label="Full Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

      <div className="grid grid-cols-2 gap-4">
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          />
        <Input
          id="phone"
          label="Phone Number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          />

      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

<RoleSelector id="role" register={register} setValue={setValue} required />
      </div>
    </div>
  )

  const footerContent = (
    // <div className="flex flex-col gap-4 mt-3">
    //   <hr />
    //   <Button 
    //     outline 
    //     label="Continue with Google"
    //     icon={FcGoogle}
    //     onClick={() => signIn('google')} 
    //   />
    //   <Button 
    //     outline 
    //     label="Continue with Github"
    //     icon={AiFillGithub}
    //     onClick={() => signIn('github')}
    //   />
    //   <div 
    //     className="
    //       text-neutral-500 
    //       text-center 
    //       mt-4 
    //       font-light
    //     "
    //   >
    //     <p>Already have an account?
    //       <span 
    //         onClick={onToggle} 
    //         className="
    //           text-neutral-800
    //           cursor-pointer 
    //           hover:underline
    //         "
    //         > Log in</span>
    //     </p>
    //   </div>
    // </div>
    <div>
       
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={FormModal.isOpen}
      title="Create User"
      actionLabel="Save New User"
      onClose={FormModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default CreateFormModal;