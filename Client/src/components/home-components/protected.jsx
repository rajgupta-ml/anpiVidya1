import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const {component}=props;
    const navigate = useNavigate();
    useEffect(()=> {
        let login = localStorage.getItem('token');
        if (!login) {
            navigate('/login')
        }
    });

    return (
        <div>
            <component/>
        </div>
    )
}

export default Protected;
