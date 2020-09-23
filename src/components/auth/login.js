import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import Register from "./register";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const loginRes = await Axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    setUserData({ token: loginRes.data.token, user: loginRes.data.user });
    localStorage.setItem("auth-token", loginRes.data.token);

    history.push("/");
  };

  const LoginForm = (
    <form className="login_form" onSubmit={submit}>
      <input
        className="login_input"
        placeholder="Correo electrónico o número de teléfono"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      ></input>
      <input
        className="login_input"
        placeholder="Contraseña"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className=" login_input login_button" type="submit">
        Iniciar sesión
      </button>
    </form>
  );

  return (
    <div className="login">
      <div className="login_left">
        <img
          className="logo_login"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook"
        />
        <p>
          Facebook te ayuda a comunicarte y compartir con las personas que
          forman parte de tu vida.
        </p>
      </div>
      <div className="login_right">
        <Card className="Card">
          <CardContent className="cardContent">
            {LoginForm}
            <a className="resetPassword">¿Olvidaste tu contraseña?</a>
            <div className="separador"></div>
            <Register />
          </CardContent>
        </Card>
        <p>
          Crea una página para un personaje público, un grupo de música o un
          negocio.
        </p>
      </div>
    </div>
  );
}

export default Login;
