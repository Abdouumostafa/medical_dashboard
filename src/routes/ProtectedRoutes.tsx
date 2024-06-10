import { Navigate } from "react-router-dom";
import useIsAuth from "../hooks/useIsAuth"
import Loading from "../components/Loading";

const ProtectedRoutes = ({ children }: any) => {
    const [isAuthenticated, isSessionValid] = useIsAuth()

    if (isAuthenticated == null || isSessionValid == null) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Navigate to='/' />;
    }
    if (!isSessionValid) {
        localStorage.clear();
        return <Navigate to='/' />;
    } else return <>{children}</>;
}

export default ProtectedRoutes