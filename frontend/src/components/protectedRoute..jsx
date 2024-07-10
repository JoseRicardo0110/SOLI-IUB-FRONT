import {Navigate, useLocation} from 'react-router-dom';

export function ProtectedRoute({children}){
    const location = useLocation();
    const token = localStorage.getItem('token');

    if(!token){
        //si el usuario no esta autenticado, redirige a la ruta de inicio dde sesion
        return <Navigate to="/login" state={{from: location }}/>;
    }
    return children;
}