import React from 'react'
// import { useState, useRef, useEffect } from 'react';
import { Input, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { loginUser } from '../../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../lib/validationSchemas/authSchema';
import { Link } from 'react-router-dom';
export default function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: '',
      password: '',

    },
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data) {
    try {
      const response = await loginUser(data);
      console.log(response)
      toast.success(response.data?.message || "Login successful");
      // token saved in local storage
      localStorage.setItem("token",response.data?.token);



    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.error || "Login failed");

    }


  }
  return (
    <>


      <form action="" className='w-full max-w-4xl space-y-10' noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header ">
          <h1 className="text-4xl font-bold mb-5">SignIn now</h1>
          <p className="text-xl">Sign in to your account</p>
        </div>

        {/* form inputs */}

        <div className="inputs-form space-y-5">

          <Input {...register("email")} isRequired validate={'faded'} label="Email" type="email" />
          <Input  {...register("password")} isRequired validate={'faded'} label="Password" type="password" />

  <div className="flex justify-between items-center">
            <Button isLoading={isSubmitting} type='submit' className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">submit</Button>
            <span>Don't have an account?
              <Link to="/auth/register" className='bold ms-1'>SignUp</Link>
            </span>
          </div>
        </div>


      </form>

    </>
  )
}
