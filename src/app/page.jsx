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
        if (index < "Andrés Castro".length) {
          setText((prevText) => prevText + "Andrés Castro"[index]);
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  let person = {
    image:
      "https://res.cloudinary.com/djif4cgg0/image/upload/v1712844499/images/oot7hwirhzqs41qyndt9.jpg",
  };
  const proyects = [
    {
      id: 1,
      name: "Vorttex Gaming",
      image:
        "https://res.cloudinary.com/djif4cgg0/image/upload/v1706793891/images/wvovglz07xvr7fkd0n8f.jpg",
      gitHub: "https://github.com/zuoki/VorttexGaming",
      deploy: "https://vorttexgaming2-0-wbmk.vercel.app/",
      tecnologias: [
        "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        "https://static.vecteezy.com/system/resources/previews/023/078/342/large_2x/prism-tech-logo-design-vector.jpg",
      ],
    },
    {
      id: 2,
      name: "Dogs by breed",
      image:
        "https://res.cloudinary.com/djif4cgg0/image/upload/v1706195433/images/ctkbnx8earvdav0ec6xq.jpg",
      gitHub: "https://github.com/afradenburg/pi-Dogs",
      deploy: "https://pi-dogs-jet.vercel.app/",
      tecnologias: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      ],
    },
    {
      id: 3,
      name: "Rick and Morty",
      image:
        "https://res.cloudinary.com/djif4cgg0/image/upload/v1709415294/images/yzb7mpvhxbet5ylz8ft8.jpg",
      gitHub: "https://github.com/afradenburg/rickDeploy",
      deploy: "https://rick-deploy.vercel.app/",
      tecnologias: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      ],
    },
  ];

  return (
    <div className="homePage">
      {/* <h1>Bienvenido/a! a mi portafolio</h1> */}
      <div className="primerSeccion">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {AnimatedText()}
          <h2 style={{ marginTop: "20px" }}>Full Stack Developer</h2>
        </div>
        <img
          src={person.image}
          alt="foto de perfil"
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "400px",
            marginTop: "20px",
            borderRadius: "150px",
          }}
        />
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "50px",
        }}
      >
        Soy desarrollador Full Stack graduado de HENRY y Psicólogo graduado de
        la UDEC, estoy enfocado en el desarrollo de aplicaciones para fortalecer
        mis conocimientos. Cuento con excelentes habilidades blandas y técnicas.
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginBottom: "50px",
          justifyContent: "center",
        }}
      >
        Actualmente estoy buscando oportunidades como desarrollador web. Si te
        interesa mi perfil, no dudes en contactarme.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <h1>Tecnologías</h1>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "10px",
          marginRight: "10px",
          justifyContent: "center",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
          alt="express"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          alt="mysql"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          alt="nextjs"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          alt="postgresql"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://reactnative.dev/img/header_logo.svg"
          alt="reactnative"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          alt="redux"
          width="80"
          height="80"
          style={{ margin: "20px", borderRadius: "0px" }}
        />
      </div>
      <div
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "110px",
        }}
      >
        <h1 style={{ textDecoration: "none", color: "black" }}>
          Mis Proyectos
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {proyects &&
          proyects.map((proyect) => (
            <div
              key={proyect.id}
              style={{
                padding: "20px",
                maxWidth: "350px",
                marginBottom: "20px",
                flexBasis: "100%",
                justifyContent: "start",
                width: "100%",
                backgroundColor: " rgb(195, 193, 193)",
                borderRadius: "15px",
              }}
            >
              <h1
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                {proyect.name}{" "}
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Link href={proyect.gitHub}>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png"
                    alt="github link"
                    style={{ maxWidth: "80px" }}
                  />
                </Link>
                <Link href={proyect.deploy}>
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/10/50/28/1000_F_510502864_Y6EuBXlRa9JfWHqvYG34z1xxHUnVams5.jpg"
                    alt="deploy link"
                    style={{ maxWidth: "73px" }}
                  />
                </Link>
              </div>
              <img
                style={{
                  border: "5px",
                  borderRadius: "15px",
                  maxWidth: "100px",
                  minHeight: "212px",
                  width: "100%",
                  minWidth: "300px",
                }}
                src={proyect.image}
                alt={proyect.name}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {proyect.tecnologias.map((tecno) => (
                  <img
                    src={tecno}
                    alt="tecnologias proyecto"
                    key={tecno}
                    style={{ maxWidth: "40px" }}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <div
        style={{ borderRadius: "15px", backgroundColor: " rgb(242, 237, 237)" }}
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Contacto
        </h2>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            marginBottom: "50px",
          }}
        >
          No dudes en contactarme por cualquiera de los siguientes medios.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/andres-castro-flechas-39a0ba186/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "inline-block",
              border: isHovered ? "2px solid blue" : "2px solid transparent",
              borderRadius: "50%",
              padding: "2px",
              transition: "border-color 0.3s",
            }}
          >
            <img
              src="https://th.bing.com/th/id/R.eb68b87815aaaaba6621aa98d2e38bf5?rik=dlxhbnYpsgIL4A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_24845.png&ehk=7L0l%2bl%2bMYbWa7hmGjFf%2b%2f7IEDbPLQku663OM4xHk018%3d&risl=&pid=ImgRaw&r=0"
              alt="LinkedIn"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                borderRadius: "50%",
                boxShadow: isHovered ? "0 0 5px blue" : "none",
              }}
            />
          </a>

          <a
            href="https://github.com/afradenburg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://th.bing.com/th/id/R.7a864f07681f187fb572468bfc949977?rik=EyUQGBjtSbMjVw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG80.png&ehk=sCQlSHnb7Wc8WNPgOilokXbf8jL4g20yv7QFEFpl6ko%3d&risl=&pid=ImgRaw&r=0"
              alt="GitHub"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
          </a>
          <a href="mailto:andres.burg@hotmail.com">
            <img
              src="https://th.bing.com/th/id/OIP.VEt1EhN43jbYg0DDxl4FJQHaHa?rs=1&pid=ImgDetMain"
              alt="Correo electrónico"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
