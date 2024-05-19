import LoginForm from '../../features/login/components/LoginForm';
import LoginBg from '../../features/login/components/LoginBg';

const LoginPage = () => {


  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <LoginBg />
            {/* Login Form */}
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage