import { RegisterDiv } from "./styled";
import { useHistory } from "react-router-dom";

const RegisterButton = () => {
  let history = useHistory();
  return (
    <>
      <RegisterDiv>
        <h3>Not a book lover yet?</h3>
        <button onClick={() => history.push("/register")}>Register</button>
      </RegisterDiv>
    </>
  );
};

export default RegisterButton;
