const skillData = {
  github: {
    title: "Git & GitHub",
    week: 1,
    xp: 550,
    difficulty: "★★★☆☆",
    learned: [
      "Repositories, commits, and version history",
      "README and Markdown documentation",
      "Publishing work through GitHub Pages"
    ],
    boss: "“Did I push the right branch?”",
    used: "Every course project and weekly learning log",
    reflection:
      "Git and GitHub were confusing at first because I was learning local files, repositories, commits, and deployment at the same time. Repeatedly committing small changes helped me understand GitHub as both a record of my work and a publishing tool."
  },
  html: {
    title: "HTML",
    week: 1,
    xp: 400,
    difficulty: "★☆☆☆☆",
    learned: [
      "Page structure, headings, paragraphs, links, and lists",
      "How index.html becomes a website homepage",
      "How HTML gives content meaning before styling"
    ],
    boss: "Turning a blank page into a slightly less blank page.",
    used: "Personal exercises, Project 1, Project 2, Project 3, and CreatorPilot",
    reflection:
      "HTML was my entry point into web development. I initially focused on getting content onto the page, but I gradually learned to think about hierarchy, readable structure, and how later CSS and JavaScript depend on clear markup."
  },
  "semantic-html": {
    title: "Semantic HTML",
    week: 2,
    xp: 500,
    difficulty: "★★☆☆☆",
    learned: [
      "Using header, main, section, nav, and footer",
      "Local file paths compared with external URLs",
      "Writing useful image alternative text"
    ],
    boss: "Choosing a tag that is more meaningful than another div.",
    used: "About Me page, Hospital Website, and every later interface",
    reflection:
      "Semantic elements helped me see that HTML is more than visual layout. Clear structure makes the page easier to understand, maintain, and navigate, especially when a site grows beyond one simple screen."
  },
  "client-design": {
    title: "Client Design",
    week: 3,
    xp: 650,
    difficulty: "★★★☆☆",
    learned: [
      "Interviewing a client and interpreting vague requirements",
      "Auditing an existing website before redesigning it",
      "Using several references instead of copying one design"
    ],
    boss: "“Can you make it simple, professional, and different?”",
    used: "Project 1 — Hospital Website",
    reflection:
      "My father, the client, did not begin with a detailed specification. I learned to ask better questions, review the existing English site, and turn broad feedback into concrete design decisions. The process showed me that communication is part of development."
  },
  css: {
    title: "CSS",
    week: 4,
    xp: 850,
    difficulty: "★★★☆☆",
    learned: [
      "Typography, color, spacing, borders, and visual hierarchy",
      "Flexbox and Grid for structured layouts",
      "Using reference sites to create a coherent visual system"
    ],
    boss: "Centering a div without questioning every life decision.",
    used: "Project 1, CPA Progress Tracker, Pokémon Face Match, and CreatorPilot",
    reflection:
      "My early AI-generated layouts often looked too boxy or generic. Comparing multiple references and changing spacing, shapes, and visual hierarchy helped me become more intentional instead of accepting the first design that worked."
  },
  "responsive-design": {
    title: "Responsive Design",
    week: 4,
    xp: 700,
    difficulty: "★★★☆☆",
    learned: [
      "Viewport settings and mobile-first thinking",
      "Flexible Grid and Flexbox layouts",
      "Adapting navigation, cards, and forms for smaller screens"
    ],
    boss: "The layout looked perfect—until the browser became 375 pixels wide.",
    used: "Project 1 and all later course projects",
    reflection:
      "Responsive design taught me that a website is not one fixed canvas. I learned to test the same content at several widths and change the layout when shrinking it would make the interface harder to read or use."
  },
  deployment: {
    title: "Deployment",
    week: 4,
    xp: 600,
    difficulty: "★★★☆☆",
    learned: [
      "Publishing project sites with GitHub Pages",
      "Understanding repository and file-based URLs",
      "Deploying a backend application through Render"
    ],
    boss: "It works locally.",
    used: "Projects 1–3 and CreatorPilot",
    reflection:
      "Deployment exposed problems that were invisible on my local machine, including paths, environment variables, and API behavior. I learned that a project is not finished when it runs locally; it must work in the environment used by real visitors."
  },
  dom: {
    title: "DOM Manipulation",
    week: 5,
    xp: 900,
    difficulty: "★★★★☆",
    learned: [
      "How the browser represents HTML as a DOM tree",
      "Selecting and changing elements, text, styles, and classes",
      "Responding to user events without reloading the page"
    ],
    boss: "The element exists. querySelector disagrees.",
    used: "JavaScript demos, CPA Progress Tracker, and Pokémon Face Match",
    reflection:
      "The DOM connected HTML and JavaScript for me. Once I understood that JavaScript could read and change the page in memory, interactive interfaces felt less mysterious and more like a series of understandable state changes."
  },
  javascript: {
    title: "JavaScript",
    week: 6,
    xp: 1500,
    difficulty: "★★★★☆",
    learned: [
      "Variables, functions, arrays, conditions, and logical operators",
      "Event listeners and user-input handling",
      "Converting input strings with Number() before calculations"
    ],
    boss: "“Why is this undefined?”",
    used: "Project 2, Project 3, API exercises, and CreatorPilot",
    reflection:
      "JavaScript was the biggest jump in difficulty. Breaking features into smaller functions and testing one behavior at a time helped me move from copying examples to understanding how data and events control an application."
  },
  localstorage: {
    title: "localStorage",
    week: 6,
    xp: 750,
    difficulty: "★★★☆☆",
    learned: [
      "Saving browser data with localStorage.setItem()",
      "Converting objects with JSON.stringify() and JSON.parse()",
      "Loading, updating, and resetting saved progress"
    ],
    boss: "Refreshing the page without losing everything.",
    used: "Project 2 — CPA Progress Tracker",
    reflection:
      "Adding persistence made the CPA Tracker feel like a real tool instead of a temporary demo. I learned why browser storage accepts strings and how serialization lets an application preserve more structured information."
  },
  debugging: {
    title: "Debugging",
    week: 7,
    xp: 1000,
    difficulty: "★★★★☆",
    learned: [
      "Using the console and isolating the smallest failing behavior",
      "Testing generated code instead of assuming it is correct",
      "Fixing date, progress, and study-plan logic"
    ],
    boss: "Fixed one bug. Created three more.",
    used: "CPA Progress Tracker, Pokémon Face Match, and CreatorPilot",
    reflection:
      "Debugging changed from random editing into a process. I learned to reproduce the issue, inspect the state, test one possible cause, and verify the fix. This became especially important when AI-generated code looked correct but behaved differently."
  },
  "api-json": {
    title: "APIs & JSON",
    week: 8,
    xp: 1400,
    difficulty: "★★★★☆",
    learned: [
      "Sending requests and reading JSON responses",
      "Handling loading, success, empty, and error states",
      "Protecting API keys with environment variables"
    ],
    boss: "The code is correct. The API is still having a bad day.",
    used: "AI Chatbot exercise, Project 3, and CreatorPilot",
    reflection:
      "APIs showed me how a frontend can use outside data and services. I also learned that network requests can fail even when my code is correct, so a good interface must explain loading and errors instead of assuming every request succeeds."
  },
  "node-express": {
    title: "Node & Express",
    week: 9,
    xp: 1450,
    difficulty: "★★★★☆",
    learned: [
      "Connecting a browser frontend to backend routes",
      "Keeping sensitive API calls away from public frontend code",
      "Passing structured JSON through a multi-step workflow"
    ],
    boss: "The frontend says CORS. The backend says nothing.",
    used: "CreatorPilot Final Project",
    reflection:
      "Building a backend changed how I thought about a web application. I learned to separate interface behavior from server responsibilities and to trace data across requests instead of treating the project as one large script."
  },
  "ai-agents": {
    title: "AI Agent Workflows",
    week: 9,
    xp: 1600,
    difficulty: "★★★★★",
    learned: [
      "Separating analysis, research, writing, review, and storyboard roles",
      "Controlling which context each agent receives",
      "Passing structured outputs between workflow stages"
    ],
    boss: "Five smart agents, one shared misunderstanding.",
    used: "CreatorPilot Final Project",
    reflection:
      "I first assumed every agent needed a very strict role. Testing showed that overly narrow contracts could reduce output quality. I learned to balance specialization with enough context and flexibility for the agents to make useful decisions."
  },
  "model-evaluation": {
    title: "Model Evaluation",
    week: 10,
    xp: 1700,
    difficulty: "★★★★★",
    learned: [
      "Using OpenRouter to compare GPT and Gemini models",
      "Building a Judge step to evaluate several outputs",
      "Balancing response quality, latency, and API cost"
    ],
    boss: "The strongest answer won. The budget did not.",
    used: "CreatorPilot Standard and Deep analysis modes",
    reflection:
      "Using several models made CreatorPilot more flexible, but it also made cost and consistency real design constraints. Removing an expensive model and testing alternatives taught me that the best technical choice is not always the most powerful model."
  }
};

const projectData = {
  hospital: {
    label: "Boss Battle 01 · Project 1",
    title: "Hospital Website",
    summary:
      "A responsive orthopedic hospital website created for a real client after reviewing the existing English-language site.",
    technologies: ["HTML", "CSS", "Responsive Design", "Client Research", "GitHub Pages"],
    challenge:
      "The client’s requirements were initially vague. I had to review the existing site, compare medical website references, and turn broad feedback into a clear structure and visual direction.",
    lesson:
      "Good development begins before coding. Asking better questions and presenting a working version helped the client give more specific feedback.",
    live: "https://youngseolee736.github.io/mp1-hospital/",
    github: "https://github.com/youngseolee736/mp1-hospital",
    color: "#66a5ff"
  },
  cpa: {
    label: "Boss Battle 02 · Project 2",
    title: "CPA Progress Tracker",
    summary:
      "A front-end study dashboard that organizes CPA modules, progress, priorities, dates, and review planning.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM", "localStorage", "Date Logic"],
    challenge:
      "The project grew from a simple tracker into a larger application. Keeping saved data, progress calculations, custom dates, and generated study plans consistent required careful debugging.",
    lesson:
      "Breaking application behavior into focused functions made the code easier to understand. Persistence and state management were what transformed the page into a useful tool.",
    live: "https://youngseolee736.github.io/CPA-progress-tracker/",
    github: "https://github.com/youngseolee736/CPA-progress-tracker",
    color: "#f7df57"
  },
  pokemon: {
    label: "Boss Battle 03 · Project 3",
    title: "Pokémon Face Match",
    summary:
      "An API-powered experience that matches a photo with Pokémon and includes live search, filters, details, favorites, and a type battle activity.",
    technologies: ["JavaScript", "DOM", "Fetch", "JSON", "PokéAPI", "GitHub Pages"],
    challenge:
      "The interface needed to coordinate uploaded images, generated matches, several live API requests, and multiple interactive states while still handling missing or delayed data.",
    lesson:
      "API features need clear loading and error states. I also learned to transform a large external response into only the information the interface actually needs.",
    live: "https://youngseolee736.github.io/pokemon/",
    github: "https://github.com/youngseolee736/pokemon",
    color: "#5ee0a0"
  },
  creatorpilot: {
    label: "Final Boss · Final Project",
    title: "CreatorPilot",
    summary:
      "An AI YouTube production studio for analyzing references, researching a topic, writing an original script, planning a storyboard, and comparing model outputs.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "OpenRouter",
      "AI Agents",
      "TranscriptAPI"
    ],
    challenge:
      "The largest challenge was coordinating several unpredictable AI stages while controlling context, originality, response time, API failures, and model cost.",
    lesson:
      "A complex AI workflow improves through testing and tradeoffs. More rules or a more expensive model do not automatically produce a better result.",
    live: "",
    github: "https://github.com/youngseolee736/creatorpilot",
    color: "#b796ff"
  }
};

const skillNodes = [...document.querySelectorAll(".skill-node")];
const projectTriggers = [...document.querySelectorAll(".project-trigger")];
const weekButtons = [...document.querySelectorAll("[data-week-filter]")];
const connectionPaths = [...document.querySelectorAll(".skill-connections path")];
const skillModal = document.querySelector("#skill-modal");
const projectModal = document.querySelector("#project-modal");
const skillTreeMap = document.querySelector("#skill-tree-map");
const achievementToast = document.querySelector("#achievement-toast");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let selectedSkill = "";
let achievementTimer;

function getSkillColor(node) {
  return getComputedStyle(node).getPropertyValue("--node-color").trim() || "#63e6ff";
}

function setActiveWeek(week) {
  weekButtons.forEach((button) => {
    const isActive = Number(button.dataset.weekFilter) === Number(week);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function highlightConnections(skillId, color) {
  skillTreeMap.style.setProperty("--active-skill-color", color);
  connectionPaths.forEach((path) => {
    const connectedSkills = path.dataset.skills.split(" ");
    path.classList.toggle("is-active", connectedSkills.includes(skillId));
  });
}

function clearConnectionHighlight() {
  connectionPaths.forEach((path) => path.classList.remove("is-active"));
}

function restoreSelectedSkill() {
  if (!selectedSkill) {
    clearConnectionHighlight();
    return;
  }

  const selectedNode = document.querySelector(`[data-skill="${selectedSkill}"]`);
  highlightConnections(selectedSkill, getSkillColor(selectedNode));
}

function populateSkillModal(skillId, node) {
  const skill = skillData[skillId];
  const color = getSkillColor(node);

  skillModal.style.setProperty("--modal-color", color);
  document.querySelector("#skill-modal-title").textContent = skill.title;
  document.querySelector("#skill-modal-week").textContent = `Week ${skill.week}`;
  document.querySelector("#skill-modal-xp").textContent = `+${skill.xp.toLocaleString()} XP`;
  document.querySelector("#skill-modal-difficulty").textContent = skill.difficulty;
  document.querySelector("#skill-modal-boss").textContent = skill.boss;
  document.querySelector("#skill-modal-used").textContent = skill.used;
  document.querySelector("#skill-modal-reflection").textContent = skill.reflection;

  const learnedList = document.querySelector("#skill-modal-learned");
  learnedList.replaceChildren(
    ...skill.learned.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

function selectSkill(node, openModal = true) {
  const skillId = node.dataset.skill;
  const skill = skillData[skillId];

  selectedSkill = skillId;
  skillNodes.forEach((skillNode) => {
    skillNode.classList.toggle("is-selected", skillNode === node);
    skillNode.classList.remove("is-week-match");
  });
  setActiveWeek(skill.week);
  highlightConnections(skillId, getSkillColor(node));

  if (openModal) {
    populateSkillModal(skillId, node);
    skillModal.showModal();
    document.body.classList.add("modal-open");
  }
}

skillNodes.forEach((node) => {
  node.addEventListener("click", () => selectSkill(node));
  node.addEventListener("mouseenter", () => {
    highlightConnections(node.dataset.skill, getSkillColor(node));
  });
  node.addEventListener("mouseleave", restoreSelectedSkill);
  node.addEventListener("focus", () => {
    highlightConnections(node.dataset.skill, getSkillColor(node));
  });
  node.addEventListener("blur", restoreSelectedSkill);
});

weekButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    const week = Number(button.dataset.weekFilter);
    selectedSkill = "";
    setActiveWeek(week);
    clearConnectionHighlight();

    const matches = skillNodes.filter((node) => Number(node.dataset.week) === week);
    skillNodes.forEach((node) => {
      node.classList.remove("is-selected");
      node.classList.toggle("is-week-match", matches.includes(node));
    });

    const matchedIds = matches.map((node) => node.dataset.skill);
    connectionPaths.forEach((path) => {
      const pathSkills = path.dataset.skills.split(" ");
      path.classList.toggle(
        "is-active",
        pathSkills.some((skillId) => matchedIds.includes(skillId))
      );
    });

    if (matches[0]) {
      skillTreeMap.style.setProperty("--active-skill-color", getSkillColor(matches[0]));
      matches[0].focus({ preventScroll: true });
    }
  });
});

function populateProjectModal(projectId) {
  const project = projectData[projectId];

  projectModal.style.setProperty("--modal-color", project.color);
  document.querySelector("#project-modal-kicker").textContent = project.label;
  document.querySelector("#project-modal-title").textContent = project.title;
  document.querySelector("#project-modal-summary").textContent = project.summary;
  document.querySelector("#project-modal-challenge").textContent = project.challenge;
  document.querySelector("#project-modal-lesson").textContent = project.lesson;

  const technologies = document.querySelector("#project-modal-technologies");
  technologies.replaceChildren(
    ...project.technologies.map((technology) => {
      const tag = document.createElement("span");
      tag.textContent = technology;
      return tag;
    })
  );

  const liveLink = document.querySelector("#project-live-link");
  const githubLink = document.querySelector("#project-github-link");
  liveLink.hidden = !project.live;
  liveLink.href = project.live || "#";
  githubLink.hidden = !project.github;
  githubLink.href = project.github || "#";
}

projectTriggers.forEach((button) => {
  button.addEventListener("click", () => {
    populateProjectModal(button.dataset.project);
    projectModal.showModal();
    document.body.classList.add("modal-open");
  });
});

function closeDialog(dialog) {
  dialog.close();
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

[skillModal, projectModal].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const clickedInside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!clickedInside) {
      closeDialog(dialog);
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});

function animateCount(element, finalValue) {
  if (reducedMotion) {
    element.textContent = finalValue;
    return;
  }

  const startTime = performance.now();
  const duration = 900;

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(finalValue * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function animateExperienceBar() {
  const progress = document.querySelector("#xp-progress");
  const finalValue = 9250;

  if (reducedMotion) {
    progress.value = finalValue;
    return;
  }

  const startTime = performance.now();
  const duration = 1500;

  function update(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - elapsed, 3);
    progress.value = Math.round(finalValue * easedProgress);

    if (elapsed < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const profilePanel = document.querySelector(".profile-panel");
const profileObserver = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) {
      return;
    }

    animateCount(document.querySelector("#skill-count"), skillNodes.length);
    animateCount(document.querySelector("#project-count"), projectTriggers.length);
    observer.disconnect();
  },
  { threshold: 0.35 }
);
profileObserver.observe(profilePanel);

const comparisonPanel = document.querySelector(".comparison-panel");
const comparisonObserver = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) {
      return;
    }

    comparisonPanel.classList.add("is-visible");
    observer.disconnect();
  },
  { threshold: 0.35 }
);
comparisonObserver.observe(comparisonPanel);

function showAchievement(title, copy) {
  clearTimeout(achievementTimer);
  document.querySelector("#achievement-title").textContent = title;
  document.querySelector("#achievement-copy").textContent = copy;
  achievementToast.classList.add("is-visible");

  achievementTimer = setTimeout(() => {
    achievementToast.classList.remove("is-visible");
  }, 3600);
}

const achievementSections = [
  {
    element: document.querySelector("#skill-tree"),
    title: "Skill Tree Discovered",
    copy: "Fifteen skills. Zero shortcuts."
  },
  {
    element: document.querySelector("#boss-battles"),
    title: "Boss Rush",
    copy: "Projects 1, 2, 3, and the Final Boss."
  },
  {
    element: document.querySelector("#quest-complete"),
    title: "Course Complete",
    copy: "The next skill is still waiting."
  }
];

const achieved = new Set();
const achievementObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || achieved.has(entry.target.id)) {
        return;
      }

      const achievement = achievementSections.find(
        (item) => item.element === entry.target
      );
      achieved.add(entry.target.id);
      showAchievement(achievement.title, achievement.copy);
    });
  },
  { threshold: 0.4 }
);

achievementSections.forEach(({ element }) => achievementObserver.observe(element));

const hero = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");
hero.addEventListener("pointermove", (event) => {
  if (reducedMotion) {
    return;
  }

  const x = ((event.clientX / window.innerWidth) - 0.5) * 16;
  const y = ((event.clientY / window.innerHeight) - 0.5) * 16;
  hero.style.setProperty("--grid-x", `${x}px`);
  hero.style.setProperty("--grid-y", `${y}px`);
  heroVisual.style.setProperty("--avatar-x", `${x * 0.65}px`);
  heroVisual.style.setProperty("--avatar-y", `${y * 0.45}px`);
});

hero.addEventListener("pointerleave", () => {
  heroVisual.style.setProperty("--avatar-x", "0px");
  heroVisual.style.setProperty("--avatar-y", "0px");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
  animateExperienceBar();
});
