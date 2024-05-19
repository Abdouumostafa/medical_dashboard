import { Link } from 'react-router-dom'
import { loginlogo, } from '../../../imagesPath/imagesPath'
import FormInput from '../../../components/FormInput'

const LoginForm = () => {
  return (
    <>
      <div className="col-lg-6 login-wrap-bg">
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <div className="account-logo">
                  <img src={loginlogo} alt="#" />
                </div>
                <h2>تسجيل دخول</h2>
                <form>
                  <FormInput
                    label='البريد الالكتروني'
                    required
                    type='email'
                  />
                  <FormInput
                    label='الرقم السري'
                    required
                    type='password'
                  />
                  <div className="form-group login-btn">
                    <Link
                      to=""
                      className="btn btn-primary btn-block"
                    >
                      تسجيل دخول
                    </Link>
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