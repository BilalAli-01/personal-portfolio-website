const stageRecords = {
  engineering: {
    title: "Data Engineer",
    copy:
      "The pipeline starts by collecting raw portfolio inputs: resumes, work experience, project repos, dashboards, and app screenshots. This stage is about structure, repeatability, and making the evidence usable.",
    evidence: "FuelCheck ETL, SQL workflow, Prayer Widget API merge, Splitr database-backed app.",
    signal: "Can organise messy inputs into reliable systems and repeatable workflows.",
    tools: ["Python", "SQL Server", "Git", "APIs", "Supabase"],
  },
  analysis: {
    title: "Data Analyst",
    copy:
      "The analyst stage validates, cleans, compares, and explains the data. This is where raw records become business-readable findings and where my Maple experience matters most.",
    evidence: "Maple Community Services data analyst role, FuelCheck validation, SQL exploration.",
    signal: "Can turn operational data into reporting, visibility, and decision support.",
    tools: ["SQL", "EDA", "Data quality", "Excel", "Reporting"],
  },
  bi: {
    title: "BI Specialist",
    copy:
      "The BI layer packages insight into dashboards and decision views. The goal is not just attractive visuals, but clear comparison, signal hierarchy, and fast interpretation.",
    evidence: "Data after Dark dashboard, FuelCheck Power BI reporting, KPI and trend visuals.",
    signal: "Can build readable dashboards for recruiters, managers, and stakeholders.",
    tools: ["Power BI", "KPI design", "Visual storytelling", "Dashboard UX"],
  },
  science: {
    title: "Data Scientist",
    copy:
      "The data science stage asks what patterns can be modelled after the data is clean and trusted. This represents my growth path from analytics into stronger statistical and predictive work.",
    evidence: "Fuel trend analysis, pricing pattern exploration, model-ready thinking.",
    signal: "Understands that good modelling depends on clean data, defensible assumptions, and evaluation.",
    tools: ["Python", "Statistics", "Feature thinking", "Model evaluation"],
  },
  ml: {
    title: "ML Direction",
    copy:
      "The final stage is the future deployment layer: learning to turn analysis and models into repeatable data products that can support predictions, automation, and better decisions.",
    evidence: "Current trajectory toward ML/data science, backed by engineering and analytics foundations.",
    signal: "A credible path into ML because the pipeline, analysis, and BI foundations are already visible.",
    tools: ["ML workflows", "Automation", "Experiment tracking", "Data products"],
  },
};

const projectRecords = {
  fuelcheck: {
    title: "FuelCheck Price Analysis",
    image:
      "https://raw.githubusercontent.com/BilalAli-01/fuelcheck-price-analysis/main/exports/overview.png",
    alt: "FuelCheck Power BI dashboard overview",
    copy:
      "Open-data analytics project using NSW/ACT fuel price records. The work covers ingestion, validation, bias detection, daily normalisation, SQL analysis, and Power BI reporting.",
    fit: "Engineering, analysis, and BI reporting.",
    signal: "Shows end-to-end data analysis discipline.",
    link: "https://github.com/BilalAli-01/fuelcheck-price-analysis",
  },
  dark: {
    title: "NSW Night-Time Economy Dashboard",
    image: "Data%20after%20Dark%20Dashboard.png",
    alt: "NSW Night-Time Economy macro trends Power BI dashboard",
    copy:
      "Power BI dashboard concept for a visualisation specialist role, combining quarterly KPI cards, benchmark signals, and trend visuals into a single executive view.",
    fit: "BI layer and executive visualisation.",
    signal: "Shows dashboard layout, KPI framing, and report readability.",
    link: "Data%20after%20Dark%20Dashboard.png",
  },
  prayer: {
    title: "Prayer Widget",
    image: "prayer_widget.png",
    alt: "Prayer Widget project preview",
    copy:
      "Desktop widget that merges calculated adhan times with scraped mosque iqama times, persists user settings, schedules notifications, and packages as a Windows app.",
    fit: "Data engineering and product integration.",
    signal: "Shows API integration, data merging, TypeScript, and user-facing polish.",
    link: "https://github.com/BilalAli-01/Prayer-widget",
  },
  splitr: {
    title: "Splitr",
    image: "splitr.png",
    alt: "Splitr project preview",
    copy:
      "Mobile-first web app for splitting group event costs in Australia, with organiser and participant flows, payment tracking, and database-backed state.",
    fit: "Product build with database and workflow thinking.",
    signal: "Shows full-stack product thinking and practical application design.",
    link: "https://splitrpay.vercel.app",
  },
  xlr8: {
    title: "XLR8 Driving School Website",
    image: "xlr8-website.png",
    alt: "XLR8 Driving School website preview",
    copy:
      "Live website for a family driving school business, built around service clarity, trust, contact pathways, and a public presence for local learners.",
    fit: "Stakeholder-facing product delivery.",
    signal: "Shows the ability to ship useful web products for real stakeholders.",
    link: "https://xlr8drivingschool.com.au/",
  },
};

const setStage = (stageKey) => {
  const stage = stageRecords[stageKey];

  document.querySelectorAll(".stage-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.stage === stageKey);
  });

  document.querySelector("#stage-title").textContent = stage.title;
  document.querySelector("#stage-copy").textContent = stage.copy;
  document.querySelector("#stage-evidence").textContent = stage.evidence;
  document.querySelector("#stage-signal").textContent = stage.signal;
  document.querySelector("#stage-tools").innerHTML = stage.tools
    .map((tool) => `<span>${tool}</span>`)
    .join("");
};

const setProject = (projectKey) => {
  const project = projectRecords[projectKey];
  const image = document.querySelector("#project-image");

  document.querySelectorAll(".evidence-row").forEach((row) => {
    row.classList.toggle("active", row.dataset.project === projectKey);
  });

  image.src = project.image;
  image.alt = project.alt;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#project-copy").textContent = project.copy;
  document.querySelector("#project-fit").textContent = project.fit;
  document.querySelector("#project-signal").textContent = project.signal;
  document.querySelector("#project-link").href = project.link;
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stage-card").forEach((card) => {
    card.addEventListener("click", () => setStage(card.dataset.stage));
  });

  document.querySelectorAll(".evidence-row").forEach((row) => {
    row.addEventListener("click", () => setProject(row.dataset.project));
  });

  setStage("engineering");
  setProject("fuelcheck");
});
