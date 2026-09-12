import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import data from "./db.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
let text = 'My site';
let description = "I'm learning React";
let nav = {"Главная": "/index", "Новости": "/news", "О компании": "/company", "Магазин": "/shop", "Контакты": "/contacts"};
let db = data.people;
let copy = 'Copyright - 2026';
root.render(
  <React.StrictMode>
    <App  title = {text} slogan = {description} navigation={nav} db={db} txt={copy} />
  </React.StrictMode>
);
