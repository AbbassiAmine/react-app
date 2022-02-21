import logo from "./images/Logo.svg";
import pp from "./images/pp.jfif";
import Facebook from "./images/Facebook.svg";
import Github from "./images/GitHub.svg";
import LinkedIn from "./images/LinkedIn.svg";
import "./App.css";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Amine Abbassi portfolio</title>
      </head>
      <body>
        <div class="content">
          <img class="logo" src={logo} alt="sapious logo" />
          <div class="card">
            <div class="profile">
              <img src={pp} alt="my img" />
              <div class="contact">
                <div>Contact:</div>
                <div class="social">
                  <a href="https://www.facebook.com/FancyBesbes">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a href="https://github.com/AbbassiAmine">
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="https://www.linkedin.com/in/amine-abbassi-b330931b5/">
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
            <div class="summary">
              <h1>Amine Abbassi</h1>
              <h3>Web Developer </h3>
              <h2>Objective</h2>
              <p>Thirsty for knowledge, Dynamic and Ambitious</p>
            </div>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="summary">
            <h1>WORK EXPERIENCE</h1>
            <p>Compagnie des Phosphates de Gafsa: CPG</p>
            <p>Project intern (August 2021 - September 2021)</p>
            <p>
              <p>
                *Conception et relisation d'une application Gestion personnel
                (Departement informatique)
              </p>
              <p>-Conception et Architecture Backend</p>
              <p>-Mise en place et integration template angular</p>
              <p>-Gestion des données avec MYSQL</p>
              <p>-Authentification et spring security</p>
              <p>-Dèvelopemment backend (CRUD) SpringBoot Java</p>
            </p>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="summary">
            <h1>Education</h1>
            <p>Ecole superieur de science et technologie hammam sousse</p>
            <p>Licence in Computer Science</p>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="summary">
            <h1>SKILLS</h1>
            <p>-Java</p>
            <p>-SpringBoot</p>
            <p>-Angular</p>
            <p>-bootstrap</p>
            <p>-PHP</p>
            <p>-HTML</p>
            <p>-Java</p>
            <p>-CSS</p>
            <p>-MySQL</p>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
