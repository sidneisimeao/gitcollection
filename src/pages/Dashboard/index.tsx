import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do Git</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img src="https://styled-components.com/logo.png" alt="Repositório" />
          <div>
            <strong>auiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repos>
    </>
  );
};
