import { useNavigate } from 'react-router-dom'
import { loginlogo, } from '../../../imagesPath/imagesPath'
import FormInput from '../../../components/FormInput'
import { pathList } from '../../../routes/routesPaths'
import { useState } from 'react'
import LoginUser from '../services/LoginUser'
import { useMutation } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const navigate = useNavigate()
  // Authentication 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const loginUser = useMutation({
    mutationFn: () => {
      return LoginUser(formData)
    },
    onSuccess: (data) => {
      localStorage.setItem("access", JSON.stringify(data.data.access));
      localStorage.setItem("refresh", JSON.stringify(data.data.refresh));
      navigate(pathList.homePage);
      location.reload();
    },
    onError: (error) => {
      switch (true) {
        // @ts-ignore
        case error?.response?.data?.message[0] === 'invalid email':
          toast.error("يرجى إدخال عنوان بريد إلكتروني صالح")
          break;
        // @ts-ignore
        case error?.response?.data?.message[0] === 'invalid password':
          toast.error("كلمة المرور الخاصة بك خاطئة")
          break;
      }
    }
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (true) {
      case formData.email === '':
        toast.error("رجاءا أدخل بريدك الإلكتروني");
        break;
      case formData.password === '':
        toast.error("من فضلك أدخل رقمك السري");
        break;
      case formData.email === '' && formData.password === '':
        toast.error("يرجى إدخال البريد الإلكتروني وكلمة المرور");
        break;
    }

    loginUser.mutate();
  };
  return (
    <>
      <ToastContainer />
      <div className="col-lg-6 login-wrap-bg">
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <div className="account-logo text-start">
                  <img src={loginlogo} alt="#" className='w-25' />
                </div>
                <h2>تسجيل دخول</h2>
                <form onSubmit={onSubmit}>
                  <FormInput
                    label='البريد الالكتروني'
                    required
                    type='email'
                    name='email'
                    id='name'
                    onChange={(text) => {
                      setFormData((prev) => {
                        return {
                          ...prev,
                          email: text
                        }
                      })
                    }}
                  />
                  <FormInput
                    label='الرقم السري'
                    required
                    type='password'
                    name='password'
                    id='password'
                    onChange={(text) => {
                      setFormData((prev) => {
                        return {
                          ...prev,
                          password: text
                        }
                      })
                    }}
                  />
                  <div className="form-group login-btn">
                    <button
                      className="btn btn-primary btn-block"
                    >
                      تسجيل دخول
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default LoginForm