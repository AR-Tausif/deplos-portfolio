const TxtsData = {
  home: {
    header: {
      nav:{
        logo:"LineNodes",
        links:{
          projects:{
            text:"Projects",
            path:"/"
          },
          blogs:{
            text:"Blogs",
            path:"/"
          },
          contact:{
            text:"Contact",
            path:"/"
          },
        }
      },
      hero: {
        title: "Tausif Ahmed Ritu",
        desc: "Frontend || MERN Stack || Nodejs Developer",
        btn: "Get Started Now",
      },
    },
    supportedServices: {
      title: "Supported services",
      desc: "We plan to add to this list in the future",
    },
  },
  portfolio: {
    projects: [
      {
        title: "Convenient control panel",
        desc: "A quick and easy panel will allow you to use our hosting without problems. With it, you will greatly facilitate the creation of your server.",
        pic: "sdfasdf",
        img: [
          {
            title:"text",
            image:"sfs",
            alt:"alt",

          }
        ],
        link: "https://google.com",
        code: "https://github.com",
        tags: ["animation", "static", "mern"],
        isAwesome:true,
      }
    ]
  },
  footer: {
    copyright: "Copyright © 2023 LineNodes. All rights reserved.",
    logoTitle: "Professional game hosting 24/7 for game servers",
    links: [
      {
        text: "Legal",
        items: [
          {
            text: "Rules",
            path: "/",
          },
          {
            text: "Privacy",
            path: "/",
          },
        ]
      },
      {
        text: "Services",
        items:[
          {
            text: "Frontend",
            path: "/",
          },
          {
            text: "MERN",
            path: "/",
          },
          {
            text: "Static",
            path: "/",
          },
        ]
      },
      {
        text: "Social",
        items:[
          {
            text: "Facebook",
            path: "/",
          },
          {
            text: "Instagram",
            path: "/",
          },
          {
            text: "Twitter",
            path: "/",
          },
          {
            text: "Github",
            path: "https://github.com/AR-Tausif",
          },
        ]
      },
    ],
  }
};

export default TxtsData;
