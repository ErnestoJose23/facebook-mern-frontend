import React, { useState, useContext } from "react";
import "./login.css";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Axios from "axios";
import UserContext from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 40;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Login() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    const displayName = name + " " + surname;
    console.log(displayName);
    const newUser = { email, password, passwordCheck, displayName };
    const registerRes = await Axios.post(
      "http://localhost:5000/users/register",
      newUser
    );
    const loginRes = await Axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    setUserData({ token: loginRes.data.token });
  };

  const bodyModal = (
    <div style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title">Registrate</h1>
      <p id="simple-modal-description">Es rápido y fácil.</p>

      <div className="separador"></div>
      <form className="register_form" onSubmit={submit}>
        <div className="register_name">
          <input
            className="register_input name_reg"
            placeholder="Nombre"
            id="register-name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="register_input name_reg"
            placeholder="Apellido"
            id="register-surname"
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
        <input
          className="register_input"
          placeholder="Correo electrónico"
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="register_input"
          placeholder="Contraseña nueva"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="register_input"
          placeholder="Repite la contraseña "
          id="register-password1"
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></input>
        <p className="register_politics">
          Al hacer clic en "Registrarte", aceptas nuestras Condiciones. Obtén
          más información sobre cómo recopilamos, usamos y compartimos tus datos
          en la Política de datos, así como el uso que hacemos de las cookies y
          tecnologías similares en la Política de cookies. Es posible que te
          enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
        </p>
        <div className="button_class">
          <button class=" button_modal" type="submit">
            Registrate
          </button>
        </div>
      </form>
    </div>
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
            <form className="login_form">
              <input
                className="login_input"
                placeholder="Correo electrónico o número de teléfono"
              ></input>
              <input
                className="login_input"
                placeholder="Contraseña"
                type="password"
              ></input>
              <button className=" login_input login_button">
                Iniciar sesión
              </button>
            </form>
            <Link className="resetPassword">¿Olvidaste tu contraseña?</Link>
            <div className="separador"></div>
            <button class="register_button" type="button" onClick={handleOpen}>
              Crear cuenta nueva
            </button>
          </CardContent>
        </Card>
        <p>
          Crea una página para un personaje público, un grupo de música o un
          negocio.
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyModal}
      </Modal>
    </div>
  );
}

export default Login;
