import React from "react";
import './style.css';

export default function Header() {
  return (
    <div className="header">
      <img src="https://inteligov.com.br/wp-content/uploads/2021/08/Logo-oficial-768x236.png" alt="logotipo da empresa" />
      <nav className="tags-a">
        <a href="https://inteligov.com.br/quem-somos/">Quem somos</a>
        <a href="https://inteligov.com.br/solucoes/">Soluções</a>
        <a href="https://conteudo.inteligov.com.br/pt-br/conteudos">Conteúdo</a>
        <a href="https://blog.inteligov.com.br/">Blog</a>
        <a href="https://auth.inteligov.com.br/oauth2/authorize?client_id=c3887e01-f927-4eda-baca-90c83af3166b&redirect_uri=https%3A%2F%2Fapp.inteligov.com.br%2Foauth2_callback&response_type=code">Login</a>
      </nav>
      <button className="btn-header">Conheça agora!</button>
    </div>
  )
}