import { handlingSearchThunk } from "../../store/modules/SearchBooks/thunks";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export function ToSearchBooksApi(value) {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(value);
  dispatch(handlingSearchThunk(value));
  setTimeout(() => history.push("/search"), 1500);
  //1 segundo e meio de delay, verificar se isso é o suficente para a API do google;
}
