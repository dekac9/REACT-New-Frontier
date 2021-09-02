var data = {
  info: {
    name: "Marko",
    surname: "Petrovic",
    adress: {
      country: "Serbia",
      city: "Belgrade",
      street: "Jurija Gagarina",
      number: 23
    },
    phone: "060 123-4567",
    img: "profile.png"
  },

  education: [
    {
      title: "Viska Hotelijerska Skola Beograd",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consectetur, excepturi veniam necessitatibus ad tempora quas alias error, dolore iusto dicta! Quasi assumenda ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          year: 2006
        },
        to: {
          year: 2010
        }
      },
      show: false
    },
    {
      title: "Code By ComTrade",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consectetur, excepturi veniam necessitatibus ad tempora quas alias error, dolore iusto dicta! Quasi assumenda ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          day: 25,
          month: 2,
          year: 2009
        }
      },
      
    },
  ],
  projects: [
    {
      title: "Order Online App",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consectetur, excepturi veniam necessitatibus ad tempora quas alias error, dolore iusto dicta! Quasi assumenda ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        year: 2009,
        month: 6
      }
    },
    {
      title: "Lost Licence Finder App",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consectetur, excepturi veniam necessitatibus ad tempora quas alias error, dolore iusto dicta! Quasi assumenda ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          year: 2006
        },
        to: {
          year: 2008
        }
      }
    }
  ],
  skills: [
    {
      title: "HTML",
      perc: 100
    },
    {
      title: "CSS",
      perc: 100
    },
    {
      title: "JavaScript",
      perc: 100
    },
    {
      title: "React",
      perc: 100
    },
    {
      title: "Angular",
      perc: 100
    }
  ],
  hobbies: [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JS" },
    { title: "ReactL" },
    { title: "Angular" }
  ]
};

export default data;
