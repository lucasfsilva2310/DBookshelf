import { LoginContainer } from "./styledButton";
import { useHistory } from "react-router-dom";

const LoginButton = () => {
  const history = useHistory();
  return (
    <>
      <LoginContainer>
        <button onClick={() => history.push("/login")}>Login</button>
      </LoginContainer>
    </>
  );
};

export default LoginButton;
