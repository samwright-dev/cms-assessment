const questions = [
  {
    id: "website-role",
    category: "Website Strategy",
    weight: 10,
    title: "What role does your website play in your business today?",
    options: [
      {
        key: "A",
        label: "Primarily a brochure site with limited lead generation.",
        caution:
          "The site currently behaves more like a low-change brochure asset than a revenue platform.",
      },
      {
        key: "B",
        label: "A brand and credibility site that captures some leads.",
        caution:
          "Lead generation appears important, but the website is not yet treated as a core growth engine.",
      },
      {
        key: "C",
        label: "An important demand generation channel for marketing.",
        positive:
          "The website already has a meaningful demand generation role, which suits Content Hub well.",
      },
      {
        key: "D",
        label: "A core revenue engine that should influence pipeline and sales outcomes.",
        positive:
          "The website is expected to influence pipeline, which is one of the strongest signals for Content Hub fit.",
      },
    ],
  },
  {
    id: "publishing-frequency",
    category: "Website Strategy",
    weight: 7,
    title: "How often does your team need to publish or update website content?",
    options: [
      {
        key: "A",
        label: "A few times a year.",
        caution:
          "Low publishing frequency may reduce the day-to-day value of a more sophisticated CMS.",
      },
      {
        key: "B",
        label: "Monthly or around campaign launches.",
        caution:
          "Publishing needs are moderate, so the business case depends on wider CRM and growth goals.",
      },
      {
        key: "C",
        label: "Weekly across pages, blogs, or landing pages.",
        positive:
          "A steady publishing rhythm makes marketer-friendly content operations more valuable.",
      },
      {
        key: "D",
        label: "Continuously, with frequent launches, tests, and optimisations.",
        positive:
          "High publishing velocity is a strong match for a platform built for scalable content operations.",
      },
    ],
  },
  {
    id: "change-ownership",
    category: "Content Operations",
    weight: 8,
    title: "Who usually needs to make website changes?",
    options: [
      {
        key: "A",
        label: "Mostly developers or external agencies.",
        caution: "Heavy developer dependence may indicate a slower operating model today.",
      },
      {
        key: "B",
        label: "A mix of developers and marketers.",
        caution:
          "There is some marketer autonomy, but routine updates may still be more complex than they should be.",
      },
      {
        key: "C",
        label: "Marketers handle most day-to-day changes with some dev help.",
        positive:
          "The team already expects marketer-led publishing, which aligns well with Content Hub.",
      },
      {
        key: "D",
        label: "Marketing needs to move quickly without relying on developers for routine work.",
        positive:
          "Reducing developer bottlenecks is one of the clearest use cases for Content Hub.",
      },
    ],
  },
  {
    id: "hubspot-usage",
    category: "HubSpot Alignment",
    weight: 12,
    title: "Which best describes your current HubSpot usage?",
    options: [
      {
        key: "A",
        label: "We do not use HubSpot and do not plan to build much around it.",
        caution:
          "If HubSpot is not part of the wider operating model, Content Hub is harder to justify.",
      },
      {
        key: "B",
        label: "We use HubSpot lightly for one function, such as CRM or email.",
        caution:
          "Limited HubSpot adoption can still work, but the broader platform advantage may be underused.",
      },
      {
        key: "C",
        label: "We use HubSpot for key marketing or sales activity, but the website sits elsewhere.",
        positive:
          "HubSpot already matters to the business, which creates a strong argument for a more connected website.",
      },
      {
        key: "D",
        label: "HubSpot is already central to how our marketing, sales, or service teams work.",
        positive:
          "Strong existing HubSpot maturity is one of the best predictors of Content Hub success.",
      },
    ],
  },
  {
    id: "crm-connection",
    category: "HubSpot Alignment",
    weight: 10,
    title: "How important is it that your website connects directly to CRM and contact data?",
    options: [
      {
        key: "A",
        label: "Not very important.",
        caution:
          "If CRM connection is not important, the strategic upside of Content Hub is lower.",
      },
      {
        key: "B",
        label: "Helpful, but not essential.",
        caution:
          "The value case is present, but CRM-connected content is not yet a priority.",
      },
      {
        key: "C",
        label: "Important for reporting, lead management, and campaign follow-up.",
        positive:
          "CRM-connected reporting and follow-up are meaningful fit signals for Content Hub.",
      },
      {
        key: "D",
        label: "Critical for attribution, personalisation, and a connected customer journey.",
        positive:
          "The business wants a tightly connected website and CRM experience, which is prime Content Hub territory.",
      },
    ],
  },
  {
    id: "content-operation",
    category: "Content Operations",
    weight: 8,
    title: "What kind of content operation are you running?",
    options: [
      {
        key: "A",
        label: "A small site with limited pages and minimal publishing.",
        caution: "A smaller content footprint can point to a lighter-weight CMS need.",
      },
      {
        key: "B",
        label: "Regular website updates and occasional campaigns.",
        caution:
          "The content operation is developing, but not yet highly complex or high-volume.",
      },
      {
        key: "C",
        label: "Frequent blogs, landing pages, campaigns, and lead magnets.",
        positive:
          "An active campaign-led content motion increases the value of a unified content platform.",
      },
      {
        key: "D",
        label: "A high-volume content engine serving multiple audiences, offers, or journeys.",
        positive: "A scaled content engine is a strong operational match for Content Hub.",
      },
    ],
  },
  {
    id: "ownership-complexity",
    category: "Governance & Scale",
    weight: 8,
    title: "How complex is your organisation’s content ownership?",
    options: [
      {
        key: "A",
        label: "One small team manages one site.",
        caution:
          "A simple ownership model may not need the full governance capability of a larger platform.",
      },
      {
        key: "B",
        label: "One main team manages content with a few contributors.",
        caution:
          "There is some collaboration, but governance needs are still relatively light.",
      },
      {
        key: "C",
        label: "Several teams or departments contribute to the site.",
        positive:
          "Cross-team contribution increases the value of permissions, consistency, and shared tooling.",
      },
      {
        key: "D",
        label: "Multiple brands, regions, or business units need shared governance and control.",
        positive: "Multi-team or multi-region complexity is a major fit signal for Content Hub.",
      },
    ],
  },
  {
    id: "governance-needs",
    category: "Governance & Scale",
    weight: 8,
    title: "What level of governance do you need around content and publishing?",
    options: [
      {
        key: "A",
        label: "Very little; simple publishing is enough.",
        caution:
          "If governance is not a concern, some enterprise CMS advantages may matter less.",
      },
      {
        key: "B",
        label: "Basic approvals and limited user controls.",
        caution: "Governance matters somewhat, but the need is not especially demanding yet.",
      },
      {
        key: "C",
        label: "Clear roles, permissions, and review processes.",
        positive:
          "Formal content governance is a good sign that the business needs a more robust platform.",
      },
      {
        key: "D",
        label: "Strong governance, approvals, access control, and enterprise-style oversight.",
        positive: "Enterprise-style governance needs are a strong argument for Content Hub.",
      },
    ],
  },
  {
    id: "growth-priority",
    category: "Content Operations",
    weight: 9,
    title: "How important are SEO, AEO, testing, and conversion optimisation to your team?",
    options: [
      {
        key: "A",
        label: "They are not major priorities.",
        caution:
          "If organic visibility and optimisation are not priorities, the platform upside is naturally lower.",
      },
      {
        key: "B",
        label: "We want the basics covered well.",
        caution:
          "The business wants a sound foundation, but not necessarily an advanced optimisation engine yet.",
      },
      {
        key: "C",
        label: "They are important and we want to improve performance consistently.",
        positive:
          "Consistent optimisation goals fit well with a connected, measurable content platform.",
      },
      {
        key: "D",
        label: "They are central to our growth strategy and need to be built into the platform.",
        positive: "A performance-led growth strategy points strongly toward Content Hub.",
      },
    ],
  },
  {
    id: "integration-needs",
    category: "HubSpot Alignment",
    weight: 8,
    title: "What level of integration or custom functionality do you need?",
    options: [
      {
        key: "A",
        label: "Very little; the website can operate largely on its own.",
        caution: "A mostly standalone site may not need a deeply connected content platform.",
      },
      {
        key: "B",
        label: "Basic forms, analytics, and a few standard tools are enough.",
        caution: "Some integration matters, but the current requirement is still relatively simple.",
      },
      {
        key: "C",
        label: "We need the website, CRM, and campaign tools to work together.",
        positive:
          "Integration between the website, CRM, and campaigns is a strong Content Hub use case.",
      },
      {
        key: "D",
        label:
          "We need deeper integrations, structured content, or custom experiences tied to business systems.",
        positive:
          "Deeper integration and structured experiences strengthen the case for Content Hub.",
      },
    ],
  },
  {
    id: "operating-model",
    category: "Governance & Scale",
    weight: 6,
    title: "Which statement best reflects your preferred operating model?",
    options: [
      {
        key: "A",
        label: "We are comfortable managing hosting, plugins, maintenance, and security ourselves.",
        caution:
          "A self-managed stack may still suit the team if platform simplicity is not a priority.",
      },
      {
        key: "B",
        label: "We can tolerate a mixed stack if it keeps upfront cost down.",
        caution:
          "A cost-first mixed stack can make it harder to realise the full platform value of Content Hub.",
      },
      {
        key: "C",
        label: "We would prefer fewer moving parts and less ongoing maintenance.",
        positive:
          "Reducing ongoing maintenance and tool sprawl is a good signal for Content Hub fit.",
      },
      {
        key: "D",
        label:
          "We want a managed, scalable platform with hosting, security, and performance built in.",
        positive:
          "A preference for a managed platform aligns closely with the Content Hub operating model.",
      },
    ],
  },
  {
    id: "future-outcome",
    category: "Website Strategy",
    weight: 6,
    title: "What outcome are you really trying to achieve with your next CMS?",
    options: [
      {
        key: "A",
        label: "Keep a simple company website live at the lowest possible cost.",
        caution:
          "A simple low-cost objective may point to a lighter-weight CMS decision.",
      },
      {
        key: "B",
        label: "Improve the site without changing too much about how we operate.",
        caution:
          "The desired change is incremental, so the need for a bigger platform step may be limited.",
      },
      {
        key: "C",
        label:
          "Build a stronger lead-generating website connected to the rest of our GTM activity.",
        positive:
          "A connected lead-generation goal is a healthy signal for Content Hub suitability.",
      },
      {
        key: "D",
        label:
          "Create a scalable, CRM-connected content platform that supports growth, performance, and governance.",
        positive:
          "The future-state ambition maps directly to what Content Hub is strongest at delivering.",
      },
    ],
  },
];

const optionMultipliers = [0, 0.4, 0.75, 1];

const bands = [
  {
    min: 0,
    max: 24,
    label: "Low fit",
    title: "HubSpot Content Hub is probably not the right next step today.",
    rationale:
      "Your answers suggest a simpler CMS model or a lower-complexity website environment may fit better for now. The strategic value of a more connected, CRM-led content platform does not appear strong yet.",
    followup:
      "In practical terms, this usually means the business is not yet asking the website to do enough operational or commercial work to unlock the full value of Content Hub. A simpler approach may be more proportionate until website strategy, content operations, or HubSpot adoption become more central.",
    summaryOne:
      "This result points to a business that may still be operating with a relatively light website model. If the site is mainly informational, updated infrequently, or not tightly connected to pipeline reporting, a premium CMS decision is harder to justify right now.",
    summaryTwo:
      "That does not mean Content Hub is a bad platform. It means the timing and use case may not be ideal yet. The next step would usually be clarifying how much commercial responsibility the website is expected to carry over the next 12 to 24 months.",
  },
  {
    min: 25,
    max: 44,
    label: "Limited fit",
    title: "There are some signs of fit, but the case is not strong yet.",
    rationale:
      "There are useful signals here, but the full platform advantage of Content Hub may be underused at your current stage. This is the kind of result that usually benefits from a broader CMS suitability conversation.",
    followup:
      "You may already see some value in tighter CRM alignment, better content operations, or a more scalable platform, but the operational picture is not fully mature yet. The strongest opportunity is often in defining the desired future state more clearly before selecting the final CMS direction.",
    summaryOne:
      "A limited-fit result usually means there are some meaningful reasons to consider Content Hub, but not yet enough to make the decision feel obvious. Often the website has some lead-generation responsibility, but the wider operating model is still split or evolving.",
    summaryTwo:
      "This is exactly the sort of scenario where a short discovery or suitability review adds value. It helps separate genuine platform needs from nice-to-have features and gives the business a more confident path forward.",
  },
  {
    min: 45,
    max: 64,
    label: "Conditional fit",
    title: "HubSpot Content Hub could be a strong fit with the right goals and setup.",
    rationale:
      "You show several meaningful fit signals, especially around growth goals and connected operations, but a few gaps still need clarifying before the decision becomes obvious.",
    followup:
      "This tends to be the range where Content Hub makes strategic sense, but only if the business is serious about moving toward a more connected, marketer-friendly, and measurable website model. The upside is there, but the implementation approach matters.",
    summaryOne:
      "A conditional-fit result suggests the business is moving in the right direction for Content Hub. There is enough complexity, growth ambition, or HubSpot alignment to make the platform relevant, but not yet enough certainty to call it a straightforward yes.",
    summaryTwo:
      "The next step here is usually to validate assumptions. That means looking at how the website should support demand generation, how much governance is needed, and whether the team wants a more unified operating model across content, CRM, and reporting.",
  },
  {
    min: 65,
    max: 84,
    label: "Strong fit",
    title: "HubSpot Content Hub looks like a strong fit for your business.",
    rationale:
      "Your answers point to a connected, scalable, and conversion-focused website model. This is the kind of profile that often benefits from bringing content, CRM, and reporting closer together.",
    followup:
      "The stronger your website’s role in revenue generation, content operations, and customer journey orchestration, the more compelling the case becomes. Businesses in this range often benefit from moving toward a more managed and unified platform rather than continuing with a fragmented stack.",
    summaryOne:
      "This result points to a business with several of the conditions that make Content Hub attractive: the website matters commercially, the team needs speed and control, and the wider go-to-market model benefits from better integration.",
    summaryTwo:
      "At this level, the question is often less about whether Content Hub can work and more about how to implement it well. Migration planning, governance, and the desired reporting model become the most important discussion points.",
  },
  {
    min: 85,
    max: 100,
    label: "Excellent fit",
    title: "HubSpot Content Hub should be at the top of your shortlist.",
    rationale:
      "You show the strongest fit signals: a revenue-minded website, meaningful HubSpot alignment, and an operating model that benefits from scale, governance, and connected customer journeys.",
    followup:
      "This is the kind of profile where the strategic and operational advantages of Content Hub are likely to compound over time. A more connected platform can support faster execution, cleaner governance, stronger attribution, and a better overall experience for both internal teams and prospects.",
    summaryOne:
      "An excellent-fit result means the business is already thinking in the way Content Hub is strongest at supporting. The website is not just a publishing layer; it is part of a wider revenue engine that needs alignment with CRM, campaigns, reporting, and team workflows.",
    summaryTwo:
      "In scenarios like this, the value case is usually less about generic CMS capability and more about the efficiency and visibility gained from consolidating website operations into the broader HubSpot ecosystem.",
  },
];

const categoryMap = {
  "Website Strategy": ["website-role", "publishing-frequency", "future-outcome"],
  "Content Operations": ["change-ownership", "content-operation", "growth-priority"],
  "HubSpot Alignment": ["hubspot-usage", "crm-connection", "integration-needs"],
  "Governance & Scale": ["ownership-complexity", "governance-needs", "operating-model"],
};

const state = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  lead: {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  },
  isAdvancing: false,
};

const screens = {
  intro: document.querySelector("#intro-screen"),
  assessment: document.querySelector("#assessment-screen"),
  capture: document.querySelector("#capture-screen"),
  results: document.querySelector("#results-screen"),
};

const startButton = document.querySelector("#start-assessment");
const questionNumber = document.querySelector("#question-number");
const questionCategory = document.querySelector("#question-category");
const questionTitle = document.querySelector("#question-title");
const optionsGrid = document.querySelector("#options-grid");
const progressStep = document.querySelector("#progress-step");
const progressPercent = document.querySelector("#progress-percent");
const progressFill = document.querySelector("#progress-fill");
const backButton = document.querySelector("#back-button");
const leadForm = document.querySelector("#lead-form");
const formHelper = document.querySelector("#form-helper");
const restartAssessmentButton = document.querySelector("#restart-assessment");
const backToStartButton = document.querySelector("#back-to-start");

const scoreValue = document.querySelector("#score-value");
const scoreBand = document.querySelector("#score-band");
const resultsTitle = document.querySelector("#results-title");
const resultsMeta = document.querySelector("#results-meta");
const resultRationale = document.querySelector("#result-rationale");
const resultRationaleSecondary = document.querySelector("#result-rationale-secondary");
const capNote = document.querySelector("#cap-note");
const summaryParagraphOne = document.querySelector("#summary-paragraph-one");
const summaryParagraphTwo = document.querySelector("#summary-paragraph-two");
const positiveList = document.querySelector("#positive-list");
const cautionList = document.querySelector("#caution-list");
const breakdownList = document.querySelector("#breakdown-list");
const answerBreakdown = document.querySelector("#answer-breakdown");

function showScreen(target) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("screen-active");
  });
  screens[target].classList.add("screen-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getBand(score) {
  return bands.find((band) => score >= band.min && score <= band.max) || bands[0];
}

function computeCategoryBreakdown() {
  return Object.entries(categoryMap).map(([category, ids]) => {
    const categoryQuestions = questions.filter((question) => ids.includes(question.id));
    const totalWeight = categoryQuestions.reduce((sum, question) => sum + question.weight, 0);
    const earnedWeight = categoryQuestions.reduce((sum, question) => {
      const questionIndex = questions.findIndex((item) => item.id === question.id);
      const answerIndex = state.answers[questionIndex] ?? 0;
      return sum + question.weight * optionMultipliers[answerIndex];
    }, 0);

    return {
      category,
      percent: Math.round((earnedWeight / totalWeight) * 100),
    };
  });
}

function computeResult() {
  let baseScore = questions.reduce((sum, question, index) => {
    const answerIndex = state.answers[index] ?? 0;
    return sum + question.weight * optionMultipliers[answerIndex];
  }, 0);

  let capReason = "";
  let bonusReason = "";

  const q1 = state.answers[0];
  const q2 = state.answers[1];
  const q4 = state.answers[3];
  const q5 = state.answers[4];
  const q12 = state.answers[11];

  if (q1 === 0 && q2 === 0) {
    baseScore = Math.min(baseScore, 35);
    capReason =
      "The score was capped because the website currently appears to operate as a low-change brochure site rather than a growth platform.";
  }

  if ([0, 1].includes(q4) && [0, 1].includes(q5) && [0, 1].includes(q12)) {
    const cappedScore = Math.min(baseScore, 50);
    if (cappedScore !== baseScore) {
      baseScore = cappedScore;
      capReason =
        "The score was capped because current HubSpot alignment and CRM-connected ambition appear limited right now.";
    }
  }

  if (q1 === 3 && [2, 3].includes(q4) && q5 === 3 && q12 === 3) {
    baseScore = Math.min(baseScore + 5, 100);
    bonusReason =
      "A fit bonus was applied because the business shows a very strong combination of revenue focus, HubSpot alignment, and connected growth ambition.";
  }

  const score = Math.round(baseScore);
  const band = getBand(score);
  const positives = [];
  const cautions = [];

  questions.forEach((question, index) => {
    const answerIndex = state.answers[index];
    const option = question.options[answerIndex];
    const item = {
      weight: question.weight,
      text: option.positive || option.caution,
    };

    if (answerIndex >= 2 && option.positive) {
      positives.push(item);
    }

    if (answerIndex <= 1 && option.caution) {
      cautions.push(item);
    }
  });

  positives.sort((left, right) => right.weight - left.weight);
  cautions.sort((left, right) => right.weight - left.weight);

  const topPositives = positives.slice(0, 4).map((item) => item.text);
  const topCautions = cautions.slice(0, 3).map((item) => item.text);

  if (bonusReason && topPositives.length < 4) {
    topPositives.push(bonusReason);
  }

  if (capReason && topCautions.length < 3) {
    topCautions.push(capReason);
  }

  return {
    score,
    band,
    capReason,
    topPositives,
    topCautions,
    categoryBreakdown: computeCategoryBreakdown(),
  };
}

function renderBreakdown(items) {
  breakdownList.innerHTML = "";

  items.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "breakdown-item";
    wrapper.innerHTML = `
      <div class="breakdown-copy">
        <strong>${item.category}</strong>
        <span>${item.percent}%</span>
      </div>
      <div class="breakdown-track" aria-hidden="true">
        <div class="breakdown-bar" style="width: ${item.percent}%"></div>
      </div>
    `;
    breakdownList.appendChild(wrapper);
  });
}

function renderAnswerBreakdown() {
  answerBreakdown.innerHTML = "";

  Object.entries(categoryMap).forEach(([category, ids]) => {
    const group = document.createElement("section");
    group.className = "answer-group";

    const groupTitle = document.createElement("h3");
    groupTitle.className = "answer-group__title";
    groupTitle.textContent = category;
    group.appendChild(groupTitle);

    const list = document.createElement("div");
    list.className = "answer-list";

    questions
      .filter((question) => ids.includes(question.id))
      .forEach((question) => {
        const index = questions.findIndex((item) => item.id === question.id);
        const answerIndex = state.answers[index];
        const option = question.options[answerIndex];
        const signalLabels = ["Low fit signal", "Limited fit signal", "Good fit signal", "Strong fit signal"];

        const item = document.createElement("article");
        item.className = "answer-item";
        item.innerHTML = `
          <div class="answer-item__top">
            <p class="answer-item__question">${question.title}</p>
            <span class="signal-chip signal-chip--${answerIndex}">${signalLabels[answerIndex]}</span>
          </div>
          <p class="answer-item__meta">Selected answer ${option.key}</p>
          <p class="answer-item__answer">${option.label}</p>
        `;
        list.appendChild(item);
      });

    group.appendChild(list);
    answerBreakdown.appendChild(group);
  });
}

function renderResults() {
  const result = computeResult();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  const metaParts = [];

  if (state.lead.company) {
    metaParts.push(`Prepared for ${state.lead.company}`);
  }

  metaParts.push(`${questions.length} assessment responses`);
  metaParts.push(formattedDate);

  scoreValue.textContent = String(result.score);
  scoreBand.textContent = result.band.label;
  resultsTitle.textContent = result.band.title;
  resultsMeta.textContent = metaParts.join(" | ");
  resultRationale.textContent = result.band.rationale;
  resultRationaleSecondary.textContent = result.band.followup;
  summaryParagraphOne.textContent = result.band.summaryOne;
  summaryParagraphTwo.textContent = result.band.summaryTwo;

  if (result.capReason) {
    capNote.hidden = false;
    capNote.textContent = result.capReason;
  } else {
    capNote.hidden = true;
    capNote.textContent = "";
  }

  positiveList.innerHTML = "";
  (result.topPositives.length
    ? result.topPositives
    : ["The assessment indicates meaningful alignment with a connected CMS model."]).forEach(
    (text) => {
      const item = document.createElement("li");
      item.textContent = text;
      positiveList.appendChild(item);
    }
  );

  cautionList.innerHTML = "";
  (result.topCautions.length
    ? result.topCautions
    : ["No major caution flags stood out in the assessment."]).forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      cautionList.appendChild(item);
    });

  renderBreakdown(result.categoryBreakdown);
  renderAnswerBreakdown();
}

function validateForm() {
  const formData = new FormData(leadForm);
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const consent = formData.get("consent");

  if (!firstName || !lastName || !company || !email || !consent) {
    formHelper.textContent =
      "Please complete every field so the report gate feels realistic in the demo.";
    formHelper.classList.add("is-error");
    return false;
  }

  state.lead = { firstName, lastName, company, email };
  formHelper.textContent = "Nothing entered here will be stored or submitted during the demo.";
  formHelper.classList.remove("is-error");
  return true;
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const selectedAnswer = state.answers[state.currentQuestion];
  const percent = Math.round(((state.currentQuestion + 1) / questions.length) * 100);

  questionNumber.textContent = String(state.currentQuestion + 1).padStart(2, "0");
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.title;
  progressStep.textContent = `Question ${state.currentQuestion + 1} of ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  backButton.disabled = state.currentQuestion === 0 || state.isAdvancing;

  optionsGrid.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(selectedAnswer === optionIndex));
    button.innerHTML = `
      <span class="option-key">${option.key}</span>
      <p class="option-text">${option.label}</p>
    `;

    if (selectedAnswer === optionIndex) {
      button.classList.add("is-selected");
    }

    button.addEventListener("click", () => {
      if (state.isAdvancing) return;
      state.answers[state.currentQuestion] = optionIndex;
      state.isAdvancing = true;
      renderQuestion();

      window.setTimeout(() => {
        if (state.currentQuestion === questions.length - 1) {
          state.isAdvancing = false;
          showScreen("capture");
          return;
        }

        state.currentQuestion += 1;
        state.isAdvancing = false;
        renderQuestion();
      }, 220);
    });

    optionsGrid.appendChild(button);
  });
}

function clearAssessmentState() {
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  state.lead = { firstName: "", lastName: "", company: "", email: "" };
  state.isAdvancing = false;
  leadForm.reset();
  formHelper.textContent = "Nothing entered here will be stored or submitted during the demo.";
  formHelper.classList.remove("is-error");
  renderQuestion();
}

startButton.addEventListener("click", () => {
  clearAssessmentState();
  showScreen("assessment");
});

backButton.addEventListener("click", () => {
  if (state.currentQuestion === 0 || state.isAdvancing) {
    return;
  }

  state.currentQuestion -= 1;
  renderQuestion();
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  renderResults();
  showScreen("results");
});

restartAssessmentButton.addEventListener("click", () => {
  clearAssessmentState();
  showScreen("assessment");
});

backToStartButton.addEventListener("click", () => {
  clearAssessmentState();
  showScreen("intro");
});

renderQuestion();
