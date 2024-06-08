import {HTMLAttributes} from 'react';
import {Link} from "react-router-dom";

function Logo({...rest}: HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link to="/" {...rest}>
            Bowery
        </Link>
    );
}

export default Logo;