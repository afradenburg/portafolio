"use client";
import Link from "next/link";
import React from "react";
import "../app/home.css";
import { useEffect, useState } from "react";

export default function Home() {

  const AnimatedText = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (index < "Soy Andres Castro Flechas".length) {
          setText((prevText) => prevText + "Soy Andres Castro Flechas"[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }, [index]);
    return <h1>{text}</h1>;
  };

  let person = {
    image:
      "https://avatars.githubusercontent.com/u/126692302?s=400&u=613584dbb6f9277b0ab277dab6afe0e9e3e4ed12&v=4",
  };
  const proyects = [
    {
      id: 1,
      name: "Vorttex Gaming",
      image:
        "https://media.licdn.com/dms/image/D4E2DAQEbr5Pblw5Dpg/profile-treasury-image-shrink_1920_1920/0/1704212520547?e=1707242400&v=beta&t=cCfTOL8ke234XPF2ivbmtM_Pbb0n6YQAQFbH9VBX9Ng",
      gitHub: "https://github.com/zuoki/VorttexGaming",
      deploy: "https://vorttex-gaming-topabli2-topablis-projects.vercel.app/"
    },
    {
      id: 2,
      name: "Dogs by breed",
      image:
        "https://res.cloudinary.com/djif4cgg0/image/upload/v1706195433/images/ctkbnx8earvdav0ec6xq.jpg",
        gitHub: "https://github.com/afradenburg/pi-Dogs",
        deploy: "https://pi-dogs-jet.vercel.app/"
    },
  ];

  return (
    <div className="homePage">
      <h1>Bienvenido a mi portafolio</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            padding: "60px",
          }}
        >
          
          {AnimatedText()}
          <h2> desarrollador full stack developer</h2>
        </div>
        <img src={person.image} alt="foto de perfil" />
      </div>
      <p>
        Soy desarrollador Full Stack y Psicologo profesional, actualmente
        enfocado en el desarrollo de aplicaciones para fortalecer mis
        conocimientos y cuento con excelentes habilidades sociales
      </p>
      <div style={{ alignContent: "center", display: "flex", justifyContent: "center" }}>
      <h1>Tecnologias</h1>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          margin: "0%",
          justifyContent: "center",
        }}
      >
        <p align="left">
          {" "}
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="80"
              height="80"
            />{" "}
          </a>{" "}
        </p>
      </div>

      <Link href={"/proyects"}>
        <h3>Mis Proyectos</h3>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          justifyContent: "space-between",
          margin: "150px",
        }}
      >
      {proyects &&
          proyects.map((proyect) => (
            <div key={proyect.id} style={{padding: "20px", maxWidth: "650px"}}>
              <h1>proyecto: {proyect.name} </h1>
              <img
                style={{
                  border: "5px",
                  borderRadius: "15px",
                  maxWidth: "800px",
                }}
                src={proyect.image}
                alt={proyect.name}
              />
              <div style={{display: "flex", justifyContent: "space-around"}}>
                  <Link href={proyect.gitHub}>
              
                  <img src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png" alt="github link" style={{maxWidth: "100px"}}/>
                
                  </Link>
                <Link href={proyect.deploy}>
                  <img src="https://as1.ftcdn.net/v2/jpg/05/10/50/28/1000_F_510502864_Y6EuBXlRa9JfWHqvYG34z1xxHUnVams5.jpg" alt="deploy link" style={{maxWidth: "100px"}}/>
                </Link>
                
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}
