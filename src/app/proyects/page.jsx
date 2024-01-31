"use client";

const Page = () => {
  const proyects = [
    {
      id: 1,
      name: 'Vorttex Gaming',
      image:
        "https://media.licdn.com/dms/image/D4E2DAQEbr5Pblw5Dpg/profile-treasury-image-shrink_1920_1920/0/1704212520547?e=1707242400&v=beta&t=cCfTOL8ke234XPF2ivbmtM_Pbb0n6YQAQFbH9VBX9Ng",
    },
    {
      id: 2,
      name: "Dogs by breed",
      image:
        "https://res.cloudinary.com/djif4cgg0/image/upload/v1706195433/images/ctkbnx8earvdav0ec6xq.jpg",
    },
  ];

  return (
    <div>
      
      {proyects &&
        proyects.map((proyect) => (
          <div key={proyect.id}>
            <h1>proyecto: {proyect.name} </h1>
            <img src={proyect.image} alt={proyect.name} />
          </div>
        ))}
    </div>
  );
};

export default Page;
