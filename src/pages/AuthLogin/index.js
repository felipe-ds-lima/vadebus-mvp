import React from "react";
import { Form, Input } from "@rocketseat/unform";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function AuthLogin() {
  function handleSubmit(data) {
    console.dir(data);
  }
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu e-mail" type="email" />
        <Input name="password" placeholder="Sua senha" type="password" />
        <button type="submit">Entrar</button>
        <Link to="/redefinir">
          Esqueceu a senha? <strong>Redefina aqui.</strong>
        </Link>
      </Form>
      <Link to="/register" className="new-account">
        Não tem uma conta? <strong>Crie a sua</strong>
      </Link>
    </Container>
  );
}
