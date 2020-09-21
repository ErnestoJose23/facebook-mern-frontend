import React from "react";
import "./login.css";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function login() {
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
        <Card>
          <CardContent>
            <form className="login_form">
              <input
                class="login_input"
                placeholder="Correo electrónico o número de teléfono"
              ></input>
              <input
                class="login_input"
                placeholder="Contraseña"
                type="password"
              ></input>
              <button class=" login_input login_button">Iniciar sesión</button>
            </form>
            <Link>¿Olvidaste tu contraseña?</Link>
            <div className="separador"></div>
            <button class="register_button">Crear cuenta nueva</button>
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

export default login;
