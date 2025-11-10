import React from 'react'
// import { useState, useRef, useEffect } from 'react';
import { Input, DatePicker, Select, SelectItem, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: '',
      password: '',

    },
    //  resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    console.log(data)


  }
  return (
    <>


      <form action="" className='w-full max-w-4xl space-y-10' noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header ">
          <h1 className="text-4xl font-bold mb-5">welcome back to Nexify</h1>
          <p className="text-xl">Sign up to get started</p>
        </div>

        {/* form inputs */}

        <div className="inputs-form space-y-5">

          <Input {...register("email")} isRequired validate={'faded'} label="Email" type="email" />
          <Input  {...register("password")} isRequired validate={'faded'} label="Password" type="password" />

          <Button type='submit' className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Login</Button>


        </div>


      </form>

    </>
  )
}
