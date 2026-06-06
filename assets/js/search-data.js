// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Ajai Sharma — Chief Product and Technology Officer at CloudFactory. AWS SageMaker, McKinsey, Holomorphic AI Labs. Berkeley, Wharton.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-aws-as-head-of-product-deep-learning-sagemaker-helping-launch-and-scale-what-became-one-of-the-largest-ai-platforms-in-the-world",
          title: 'Joined AWS as Head of Product, Deep Learning — SageMaker, helping launch and...',
          description: "",
          section: "News",},{id: "news-cofounded-holomorphic-ai-labs-building-enterprise-grade-ai-agents-and-a-genai-reasoning-api-platform",
          title: 'Cofounded Holomorphic AI Labs, building enterprise-grade AI agents and a GenAI reasoning API...',
          description: "",
          section: "News",},{id: "news-joined-cloudfactory-as-chief-product-and-technology-officer-leading-the-genai-agent-platform-ml-science-and-forward-deployed-engineering-teams",
          title: 'Joined CloudFactory as Chief Product and Technology Officer, leading the GenAI Agent Platform,...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6A%61%69.%73%68%61%72%6D%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ajaisharma1", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ajaishar", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ajaislife", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
