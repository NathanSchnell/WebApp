import { Container } from "reactstrap";
import UserLoginForm from "../features/user/LoginForm";

const HomePage = () => {
    return (
        <Container>
            <h1>Order Management System</h1>
            <UserLoginForm />
        </Container>
    );
};

export default HomePage;
