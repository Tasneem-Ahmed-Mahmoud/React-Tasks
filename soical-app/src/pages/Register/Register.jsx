
import { useState, useRef, useEffect } from 'react';
import { Input, DatePicker, Select, SelectItem, Button,  Alert } from "@heroui/react";
import { Link ,useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../lib/validationSchemas/authSchema'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { registerUser } from '../../services/authService';
import { ToastContainer, toast } from 'react-toastify';

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
  const [errorMsg, setErrorMsg ] = useState('');
  const [successMsg, setSuccessMsg ] = useState('');
 const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  async function onSubmit(data) {
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const response = await registerUser(data);
      console.log(response);
      // Handle successful registration
      
     // setSuccessMsg(response.data?.message|| "Registration successful");

     toast.success(response.data?.message|| "Registration successful");
      // navigate("/login")

navigate("/auth/login")

    } catch (error) {
      

      // Handle registration error
      console.log(error)
       setErrorMsg(error.response?.data?.error || "Registration failed");
    }
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
          <Input
            {...register("password")}
            isRequired
            label="Password"
            errorMessage={errors.password?.message}
            isInvalid={Boolean(errors.password)}
            type={showPassword ? "text" : "password"}
            endContent={
              showPassword ?
                <FaEyeSlash className="text-3xl cursor-pointer" onClick={() => setShowPassword(false)} /> :
                <FaEye className="text-3xl cursor-pointer" onClick={() => setShowPassword(true)} />
            }
          />
          <Input {...register("rePassword")}
            isRequired validate={'faded'} label="RePassword" type="password"
            errorMessage={errors.rePassword?.message} isInvalid={Boolean(errors.rePassword)}
          />

          <div className="flex gap-2">
            {/* <DatePicker label="Birth date" isRequired {...register("dateOfBirth")}
              errorMessage={errors.dateOfBirth?.message} isInvalid={Boolean(errors.dateOfBirth)}
            /> */}

            <Input type="date"
              {...register("dateOfBirth")}
              isRequired validate={'faded'} label="Birth date"
              errorMessage={errors.dateOfBirth?.message} isInvalid={Boolean(errors.dateOfBirth)}
            />
            <Select label="Select an gender" isRequired {...register("gender")}
              errorMessage={errors.gender?.message} isInvalid={Boolean(errors.gender)}
            >
              <SelectItem key="male">Male</SelectItem>
              <SelectItem key="female">Female</SelectItem>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Button isLoading={isSubmitting} type='submit' className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">submit</Button>
            <span>Already have an account?
              <Link to="/auth/login" className='bold ms-1'>SignIn</Link>
            </span>
          </div>

        </div>

        {errorMsg && <Alert color="danger" title={errorMsg} className='w=1/2' />}
        {successMsg && <Alert color="success" title={successMsg} className='w=1/2' />}

      </form>
    </>
  )
}
