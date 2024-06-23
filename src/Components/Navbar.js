import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import { Text } from "@chakra-ui/react";

export default function Navbar({ informationSectionRef }) {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/');
        setTimeout(() => {
        informationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adjust this timeout if necessary
    };
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <Text fontSize={`lg`}>
                    Active Gift Card Validator
                </Text>
            </Link>
            <ul>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink onClick={handleContactClick}>Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    return (
        <li className={children === "Home" ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}