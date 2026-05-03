const projectRecords = {
  fuelcheck: {
    title: "FuelCheck Price Analysis",
    image:
      "https://raw.githubusercontent.com/BilalAli-01/fuelcheck-price-analysis/main/exports/overview.png",
    alt: "FuelCheck Power BI dashboard overview",
    copy:
      "Open-data analytics project using NSW/ACT fuel price records. The work covers ingestion, validation, bias detection, daily normalisation, SQL analysis, and Power BI reporting.",
    evidence:
      "1.85M raw records, 1.75M cleaned rows, 1.25M daily observations, documented SQL workflow.",
    signal:
      "Shows end-to-end data analysis discipline without making the whole portfolio about one project.",
    link: "https://github.com/BilalAli-01/fuelcheck-price-analysis",
  },
  dark: {
    title: "NSW Night-Time Economy Dashboard",
    image: "Data%20after%20Dark%20Dashboard.png",
    alt: "NSW Night-Time Economy macro trends Power BI dashboard",
    copy:
      "Power BI dashboard concept for a visualisation specialist role, combining quarterly KPI cards, benchmark signals, and trend visuals into a single executive view.",
    evidence:
      "KPI cards, quarter controls, bar and line visuals, labelled spend and movement comparisons.",
    signal:
      "Shows BI visual design, report layout, and the ability to package trends for decision-makers.",
    link: "Data%20after%20Dark%20Dashboard.png",
  },
  prayer: {
    title: "Prayer Widget",
    image: "prayer_widget.png",
    alt: "Prayer Widget project preview",
    copy:
      "Always-on-top desktop widget that merges calculated adhan times with scraped mosque iqama times, persists user settings, schedules notifications, and packages as a Windows app.",
    evidence:
      "Electron main process, React renderer, TypeScript, API fetching, scraping, local settings, tray behaviour.",
    signal:
      "Shows engineering range: API integration, data merging, app packaging, and user-facing polish.",
    link: "https://github.com/BilalAli-01/Prayer-widget",
  },
  xlr8: {
    title: "XLR8 Driving School Website",
    image: "xlr8-website.png",
    alt: "XLR8 Driving School website preview",
    copy:
      "Live website for a family driving school business, built around service clarity, trust, contact pathways, and a public presence for local learners.",
    evidence:
      "Private repo, live deployed website, business-focused content structure, responsive public-facing design.",
    signal:
      "Shows the ability to ship useful web products for real stakeholders, not only coursework-style projects.",
    link: "https://xlr8drivingschool.com.au/",
  },
  splitr: {
    title: "Splitr",
    image: "splitr.png",
    alt: "Splitr project preview",
    copy:
      "Mobile-first web app for splitting group event costs in Australia. Organisers create events, share join links, track payments, and manage flexible payment scenarios.",
    evidence:
      "Next.js App Router, Supabase auth/database, Vercel deployment, organiser dashboard, participant flows.",
    signal:
      "Shows product thinking, full-stack workflow design, and practical database-backed application work.",
    link: "https://splitrpay.vercel.app",
  },
};

const lensCopy = {
  analyst:
    "I build practical data products: SQL analysis, Power BI reports, repeatable ETL workflows, and web-based tools that solve real operational problems.",
  bi:
    "For BI roles, the strongest signals are dashboard design, KPI framing, Power BI reporting, and the ability to make complex data easy to scan.",
  engineering:
    "For analytics engineering direction, the strongest signals are ETL structure, SQL modelling decisions, API integration, documentation, and deployable tools.",
  ml:
    "For ML and data science growth, the focus is building clean data foundations, analytical reasoning, model-ready thinking, and stronger Python/statistics depth.",
};

const formatNumber = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 2)}M`;
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  }

  return String(value);
};

const animateMetrics = () => {
  document.querySelectorAll("[data-count]").forEach((metric) => {
    const target = Number(metric.dataset.count);
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      metric.textContent = formatNumber(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        metric.textContent = formatNumber(target);
      }
    };

    requestAnimationFrame(tick);
  });
};

const setProjectDetail = (projectKey) => {
  const record = projectRecords[projectKey];
  const image = document.querySelector("#project-image");

  document.querySelectorAll(".project-row[data-project]").forEach((row) => {
    row.classList.toggle("selected", row.dataset.project === projectKey);
  });

  if (record.image) {
    image.src = record.image;
    image.alt = record.alt;
    image.hidden = false;
  } else {
    image.hidden = true;
  }

  document.querySelector("#project-title").textContent = record.title;
  document.querySelector("#project-copy").textContent = record.copy;
  document.querySelector("#project-evidence").textContent = record.evidence;
  document.querySelector("#project-signal").textContent = record.signal;
  document.querySelector("#project-link").href = record.link;
};

const setupProjectRows = () => {
  document.querySelectorAll(".project-row[data-project]").forEach((row) => {
    row.addEventListener("click", () => setProjectDetail(row.dataset.project));
  });

  setProjectDetail("dark");
};

const setupProjectFilters = () => {
  const buttons = document.querySelectorAll(".filter-button");
  const rows = document.querySelectorAll(".project-row[data-project]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      rows.forEach((row) => {
        const categories = row.dataset.category || "";
        const show = filter === "all" || categories.includes(filter);
        row.hidden = !show;
      });
    });
  });
};

const setupRoleLenses = () => {
  const profileCopy = document.querySelector(".profile-panel p");

  document.querySelectorAll(".lens").forEach((lens) => {
    lens.addEventListener("click", () => {
      document.querySelectorAll(".lens").forEach((item) => item.classList.remove("active"));
      lens.classList.add("active");
      profileCopy.textContent = lensCopy[lens.dataset.lens];
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  animateMetrics();
  setupProjectRows();
  setupProjectFilters();
  setupRoleLenses();
});
