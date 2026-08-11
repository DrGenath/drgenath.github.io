// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed conference papers, journal articles, and other scientific publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected consulting, digitalization, automation, and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My current curriculum vitae. A German PDF version is available for download.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Here are my teaching responsibilities, supervised bachelor&#39;s and master&#39;s theses, academic talks and projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-scientific-service",
          title: "Scientific Service",
          description: "I have participated in the editing of journals and the review of conference papers and as the co-organisation of conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sientificservice/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-delighted-to-say-that-i-successfully-completed-my-master-s-degree-and-master-s-thesis-with-a-grade-of-1-3",
          title: 'I’m delighted to say that I successfully completed my master’s degree and master’s...',
          description: "",
          section: "News",},{id: "news-my-new-job-amp-start-of-my-phd",
          title: 'My new job &amp;amp; start of my PhD 🎉',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new_job_and_phd/";
            },},{id: "news-i-m-happy-to-say-that-i-ve-just-started-working-also-at-the-group-for-information-and-knowledge-management",
          title: 'I’m happy to say that I’ve just started working also at the Group...',
          description: "",
          section: "News",},{id: "news-nominated-for-the-best-paper-at-the-wsc-2023",
          title: 'Nominated for the best paper at the WSC 2023. 🙌',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-say-that-i-ve-just-turned-in-my-phd-thesis-the-defense-of-the-dissertation-will-probably-take-place-at-the-beginning-of-november",
          title: 'I’m happy to say that I’ve just turned in my PhD thesis! 🎉🥸📝...',
          description: "",
          section: "News",},{id: "news-teaching-digitalization-automation-ai-and-the-eu-ai-act",
          title: 'Teaching digitalization, automation, AI, and the EU AI Act',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/lecturer_digitalization_ai/";
            },},{id: "news-new-role-as-senior-consultant-at-metroplan",
          title: 'New role as Senior Consultant at Metroplan',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/senior_consultant_at_metroplan/";
            },},{id: "news-dr-ing-successfully-completed",
          title: 'Dr.-Ing. successfully completed! 🎓',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/docorate_finished/";
            },},{id: "news-digitalization-and-automation-projects-in-factory-planning",
          title: 'Digitalization and automation projects in factory planning',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/current_consulting_projects/";
            },},{id: "projects-digitalization-of-mechanical-production",
          title: 'Digitalization of Mechanical Production',
          description: "Target processes and an IT landscape for a digitalized and automated production environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-lights-out-factory-feasibility",
          title: 'Lights-Out Factory Feasibility',
          description: "Technical assessment and prioritization of automation potential along production processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-factory-master-planning",
          title: 'Factory Master Planning',
          description: "Area program and production layout for the economic assessment of a new factory site.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-administrative-process-automation",
          title: 'Administrative Process Automation',
          description: "Power Automate workflows that reduce recurring manual effort and media discontinuities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-odoo-erp-introduction",
          title: 'Odoo ERP Introduction',
          description: "Configuration and customization of an ERP system around company-specific business processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-autograding-and-generative-ai",
          title: 'Autograding and Generative AI',
          description: "A university-wide autograder with automated tests and AI-supported student feedback.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-knowledge-discovery-in-simulation-data",
          title: 'Knowledge Discovery in Simulation Data',
          description: "Machine learning, explainable AI, and visual analytics for automated simulation-data analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-digital-twins-with-opc-ua",
          title: 'Digital Twins with OPC UA',
          description: "Connected digital representations of production systems for analysis and transformation projects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-ai-and-digitalization-training",
          title: 'AI and Digitalization Training',
          description: "Practical training for consultants, managers, professionals, and students.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65%6E%61%74%68.%6A%6F%6E%61%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DrGenath", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jonas-genath-7830a335b", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jonas-Genath/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://handball-woelfe.de/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
