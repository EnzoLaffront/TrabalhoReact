/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ifoodlogo from "./img/Ifood2logo.png";
import styles from "./styles.module.css";
/*function App() {

  const [values, setValues] =
  useState({Usuario: '', senha: ''});
  console.log(values);
  //function initialState(){
   // return{Usuario: '', senha: ''};
 // }



  // eslint-disable-next-line no-unused-vars


    */
function App() {
  const [count, setCount] = useState(0);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [emailCorreto] = useState("usuario@gmail.com");
  const [senhaCorreta] = useState("12345");

  const User = (event) => {
    // eslint-disable-next-line no-unused-vars

    setUsuario(event.target.value);
    console.log(usuario);
  };

  const Senha = (event) => {
    setSenha(event.target.value);
    console.log(senha);
  };

  function addCount() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    if (usuario === emailCorreto && senha === senhaCorreta) {
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={ifoodlogo} alt="LogoIfood" className={styles.imagem} />
        <h1 className={styles.titulo}>Gestor de Pedidos</h1>
        <span>Insira seu usuário e senha para se conectar</span>
      </header>

      <form>
        <div className={styles.inputContainer}>
          <label htmlFor="Usuario">Usuário</label>
          <input
            type="text"
            name="Usuario"
            id="Usuario"
            placeholder="Usuario"
            onChange={User}
            value={usuario}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            name="senha"
            id="senha"
            placeholder="Senha"
            onChange={Senha}
            value={senha}
          />
        </div>

        <a href="Esqueceu sua senha?"></a>

        <button onClick={addCount} className={styles.butao}>
          {" "}
          Entrar{" "}
        </button>

        <button className={styles.butao2}>
          Estou com problemas para acessar
        </button>
      </form>
    </div>
  );
}

export default App;
