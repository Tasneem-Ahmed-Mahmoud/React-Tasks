import { useState, useRef, useEffect } from 'react';
import { Input, DatePicker, Select, SelectItem, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../lib/validationSchemas/authSchema'

export default function Register() {
  // controlled component ******
  //const [nameInput,setNameInput] = useState('');

  // uncontrolled component **** (useRef )
  // const nameInput = useRef();
  // const emailInput = useRef();
  // const passwordInput = useRef();
  // const rePasswordInput = useRef();

  // function submitData(e) {
  //   e.preventDefault()
  //   let data = {
  //     name: nameInput.current.value,
  //     email: emailInput.current.value,
  //     password: passwordInput.current.value,
  //     rePassword: rePasswordInput.current.value,
  //     // birthDate: birthDateInput.current.value,
  //     // gender: genderInput.current.value
  //   }
  //   console.log(data)
  // }

  // console.log(nameInput)

  // useEffect(() => {
  //   console.log(nameInput.current.value)
  // })

  // function getData() {
  //   console.log(nameInput.current.value)
  // }
  // *****************************************************************
  // control form by package
  // (1)react-hook-form(controlled component)
  // (2)react-hook-form(uncontrolled component)
  // *******************************************************************
  //react-hook-form***************
  // validation
  // const schema = yup
  // .object({
  //   nameInput: yup.string().required('name is required').maxLength(3,'name is too long'),
  //   emailInput: yup.string().email('email is invalid').required('email is required'),
  //   passwordInput: yup.string().required('password is required'),
  //   rePasswordInput: yup.string().required('rePassword is required'),
  //   birthDateInput: yup.string().required('birthDate is required'),
  //   genderInput: yup.string().required('gender is required'),
  //   age: yup.number().positive().integer().required(),
  // })
  // .required()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      dateOfBirth: '',
      gender: ''
    },
     resolver: zodResolver(registerSchema),
  })

  // console.log(register())

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

          <Input {...register("name", { required: "name is required", maxLength: { message: "name is too long", value: 3 } })}
          errorMessage={errors.name?.message} isInvalid={Boolean(errors.name)}
          isRequired validate={'faded'} label="Name" type="name" />
          {/* {errors.name && <p className="text-red-500 ">{errors.name.message}</p>}  */}

          <Input {...register("email")}
            isRequired validate={'faded'} label="Email" type="email" 
            errorMessage={errors.email?.message} isInvalid={Boolean(errors.email)}
            />
          <Input  {...register("password")}
            isRequired validate={'faded'} label="Password" type="password" 
            errorMessage={errors.password?.message} isInvalid={Boolean(errors.password)}
            />
          <Input {...register("rePassword")}
            isRequired validate={'faded'} label="RePassword" type="password" />

          <div className="flex gap-2">
            <DatePicker label="Birth date" isRequired {...register("dateOfBirth")} 
              errorMessage={errors.dateOfBirth?.message} isInvalid={Boolean(errors.dateOfBirth)}
            />
            <Select label="Select an gender" isRequired {...register("gender")}
              errorMessage={errors.gender?.message} isInvalid={Boolean(errors.gender)}
            >
              <SelectItem value="option2">Male</SelectItem>
              <SelectItem value="option1">Female</SelectItem>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Button type='submit' className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">submit</Button>
            <span>Already have an account?
              <Link to="/auth/login" className='bold ms-1'>SignIn</Link>
            </span>
          </div>

        </div>


      </form>
    </>
  )
}
