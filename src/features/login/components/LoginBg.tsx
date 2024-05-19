import { login02 } from '../../../imagesPath/imagesPath'
const LoginBg = () => {
    console.log('bg-color')
    return (
        <div className="col-lg-6 login-wrap">
            <div className="login-sec">
                <div className="log-img">
                    <img className="img-fluid" src={login02} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default LoginBg