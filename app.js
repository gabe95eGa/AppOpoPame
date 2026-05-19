const EXAM_DATA = window.EXAM_DATA;

if (!EXAM_DATA) {
  throw new Error("No s'ha carregat el banc de preguntes. Revisa data/banc-preguntes.js.");
}

const QUESTION_BANK = EXAM_DATA.questionBank;
const CASE_CONTEXT = EXAM_DATA.caseContext;
const CASE_QUESTIONS = EXAM_DATA.caseQuestions;
const STUDY_TEXT = window.STUDY_TEXT || [];

const app = document.getElementById("app");
const homeTemplate = document.getElementById("homeTemplate");
const resetStatsBtn = document.getElementById("resetStatsBtn");
const confirmResetModal = document.getElementById("confirmResetModal");
const cancelResetBtn = document.getElementById("cancelResetBtn");
const confirmResetBtn = document.getElementById("confirmResetBtn");
const STORAGE_KEY = "examenEducacioInfantilStats";
let session = null;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(items, count) {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function prepareQuestions(items) {
  return items.map((question) => ({
    ...question,
    shuffledOptions: shuffle(question.options.map((text, index) => ({ text, index })))
  }));
}

function prepareStudyQuestions(items) {
  return items.map((question) => ({
    ...question,
    studyOptions: shuffle(question.options.map((text, index) => ({ text, index })))
  }));
}

function getStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveAttempt(attempt) {
  const stats = getStats();
  stats.push(attempt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats.slice(-50)));
}

function formatScore(value) {
  return Number(value).toFixed(3).replace(/\.?0+$/, "");
}

function reviewPill(question) {
  return question.reviewLabel ? `<span class="pill review-pill">${question.reviewLabel}</span>` : "";
}

function contentReviewPill(item) {
  return item.reviewLabel ? `<span class="pill review-pill">${item.reviewLabel}</span>` : "";
}

function contentKey(item) {
  return `${item.annex} - ${item.theme}`;
}

function renderHome() {
  session = null;
  app.replaceChildren(homeTemplate.content.cloneNode(true));
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;
      if (mode === "study") renderStudy();
      if (mode === "plainText") renderPlainTextStudy();
      if (mode === "first") startExam("first");
      if (mode === "case") startExam("case");
    });
  });
  renderStats();
}

function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  const weakTopics = document.getElementById("weakTopics");
  const stats = getStats();
  if (!statsGrid || !weakTopics) return;

  if (!stats.length) {
    statsGrid.innerHTML = `
      <div class="stat-card"><span>Millor puntuacio</span><strong>-</strong></div>
      <div class="stat-card"><span>Ultima puntuacio</span><strong>-</strong></div>
      <div class="stat-card"><span>Percentatge d'encerts</span><strong>-</strong></div>
      <div class="stat-card"><span>Exàmens fets</span><strong>0</strong></div>
    `;
    weakTopics.innerHTML = `<p class="muted">Encara no hi ha resultats desats.</p>`;
    return;
  }

  const best = stats.reduce((top, item) => (item.score / item.max > top.score / top.max ? item : top), stats[0]);
  const last = stats[stats.length - 1];
  const correct = stats.reduce((sum, item) => sum + item.correct, 0);
  const total = stats.reduce((sum, item) => sum + item.total, 0);
  const percent = total ? Math.round((correct / total) * 100) : 0;

  statsGrid.innerHTML = `
    <div class="stat-card"><span>Millor puntuacio</span><strong>${formatScore(best.score)}/${formatScore(best.max)}</strong></div>
    <div class="stat-card"><span>Ultima puntuacio</span><strong>${formatScore(last.score)}/${formatScore(last.max)}</strong></div>
    <div class="stat-card"><span>Percentatge d'encerts</span><strong>${percent}%</strong></div>
    <div class="stat-card"><span>Exàmens fets</span><strong>${stats.length}</strong></div>
  `;

  const misses = {};
  stats.forEach((item) => {
    Object.entries(item.topicMisses || {}).forEach(([topic, amount]) => {
      misses[topic] = (misses[topic] || 0) + amount;
    });
  });
  const weakest = Object.entries(misses).sort((a, b) => b[1] - a[1]).slice(0, 4);
  weakTopics.innerHTML = weakest.length
    ? `<h3>Temes mes fallats</h3>${weakest.map(([topic, amount]) => `<div class="weak-topic"><span>${topic}</span><strong>${amount}</strong></div>`).join("")}`
    : `<p class="muted">Encara no es poden deduir temes mes fallats.</p>`;
}

function startExam(type) {
  const isCase = type === "case";
  const baseQuestions = isCase ? CASE_QUESTIONS : sample(QUESTION_BANK, 40);
  session = {
    type,
    title: isCase ? "Segona prova - Cas practic" : "Primera prova - Tipus test",
    questions: prepareQuestions(baseQuestions),
    current: 0,
    answers: {},
    context: isCase ? CASE_CONTEXT : "",
    config: isCase
      ? { correct: 1.333, wrong: -0.333, blank: -0.333, max: 19.995, pass: null }
      : { correct: 0.75, wrong: -0.187, blank: 0, max: 30, pass: 15 }
  };
  renderExam();
}

function currentQuestion() {
  return session.questions[session.current];
}

function renderExam() {
  const question = currentQuestion();
  const answered = Object.keys(session.answers).length;
  const percent = ((session.current + 1) / session.questions.length) * 100;

  app.innerHTML = `
    <section class="exam-shell">
      <div class="exam-panel panel">
        <div class="exam-header">
          <div>
            <p class="eyebrow">${session.title}</p>
            <h2>Pregunta ${session.current + 1} de ${session.questions.length}</h2>
          </div>
          <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
        </div>
        ${session.context ? `<p class="muted">${session.context}</p>` : ""}
        <div class="progress-wrap" aria-label="Progres">
          <div class="progress-bar" style="width: ${percent}%"></div>
        </div>
        <div class="question-card">
          <div class="question-meta">
            <span class="pill">${question.theme}</span>
            <span class="pill">${question.document}</span>
            ${reviewPill(question)}
          </div>
          <h3 class="question-title">${question.prompt}</h3>
          <div class="options">
            ${question.shuffledOptions.map((option, index) => {
              const selected = session.answers[question.id] === option.index;
              return `
                <button class="option ${selected ? "is-selected" : ""}" data-option="${option.index}" type="button">
                  <span class="option-marker">${String.fromCharCode(65 + index)}</span>
                  <span>${option.text}</span>
                </button>
              `;
            }).join("")}
          </div>
          <div class="actions">
            <button class="secondary-button" id="blankBtn" type="button">Deixa en blanc</button>
            <button class="secondary-button" id="prevBtn" type="button" ${session.current === 0 ? "disabled" : ""}>Anterior</button>
            <button class="primary-button" id="nextBtn" type="button">${session.current === session.questions.length - 1 ? "Revisa" : "Seguent"}</button>
          </div>
        </div>
      </div>
      <aside class="panel side-panel">
        <p class="eyebrow">Seguiment</p>
        <h3>${answered} respostes marcades</h3>
        <div class="nav-grid">
          ${session.questions.map((item, index) => {
            const value = session.answers[item.id];
            const state = value === null ? "is-blank" : value === undefined ? "" : "is-answered";
            return `<button class="nav-dot ${index === session.current ? "is-active" : ""} ${state}" data-jump="${index}" type="button">${index + 1}</button>`;
          }).join("")}
        </div>
        <div class="actions">
          <button class="primary-button" id="reviewBtn" type="button">Revisar abans d'entregar</button>
        </div>
      </aside>
    </section>
  `;

  document.getElementById("homeBtn").addEventListener("click", renderHome);
  document.getElementById("blankBtn").addEventListener("click", () => {
    session.answers[question.id] = null;
    renderExam();
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (session.current > 0) session.current -= 1;
    renderExam();
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (session.current < session.questions.length - 1) {
      session.current += 1;
      renderExam();
    } else {
      renderReview();
    }
  });
  document.getElementById("reviewBtn").addEventListener("click", renderReview);
  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      session.answers[question.id] = Number(button.dataset.option);
      renderExam();
    });
  });
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      session.current = Number(button.dataset.jump);
      renderExam();
    });
  });
}

function renderReview() {
  const blankCount = session.questions.filter((question) => session.answers[question.id] === undefined || session.answers[question.id] === null).length;
  app.innerHTML = `
    <section class="panel review-panel">
      <p class="eyebrow">${session.title}</p>
      <h2>Revisio abans d'entregar</h2>
      <p class="muted">Tens ${blankCount} preguntes en blanc. Pots tornar a qualsevol pregunta o entregar l'examen.</p>
      <div class="review-list">
        ${session.questions.map((question, index) => {
          const answer = session.answers[question.id];
          const label = answer === undefined || answer === null ? "En blanc" : question.options[answer];
          return `
            <div class="review-item ${answer === undefined || answer === null ? "blank" : ""}">
              <strong>${index + 1}. ${question.prompt}</strong>
              <p class="muted">Resposta marcada: ${label}</p>
              <button class="secondary-button" data-edit="${index}" type="button">Revisa aquesta pregunta</button>
            </div>
          `;
        }).join("")}
      </div>
      <div class="actions">
        <button class="secondary-button" id="backExamBtn" type="button">Continua revisant</button>
        <button class="primary-button" id="submitBtn" type="button">Entrega examen</button>
      </div>
    </section>
  `;
  document.getElementById("backExamBtn").addEventListener("click", renderExam);
  document.getElementById("submitBtn").addEventListener("click", finishExam);
  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      session.current = Number(button.dataset.edit);
      renderExam();
    });
  });
}

function calculateResults() {
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  let score = 0;
  const topicMisses = {};

  const details = session.questions.map((question) => {
    const answer = session.answers[question.id];
    let state = "blank";
    if (answer === undefined || answer === null) {
      blank += 1;
      score += session.config.blank;
    } else if (answer === question.correct) {
      correct += 1;
      score += session.config.correct;
      state = "correct";
    } else {
      wrong += 1;
      score += session.config.wrong;
      state = "wrong";
    }

    if (state !== "correct") {
      topicMisses[question.theme] = (topicMisses[question.theme] || 0) + 1;
    }

    return { question, answer, state };
  });

  return { correct, wrong, blank, score, details, topicMisses };
}

function finishExam() {
  const result = calculateResults();
  saveAttempt({
    mode: session.type,
    score: result.score,
    max: session.config.max,
    correct: result.correct,
    wrong: result.wrong,
    blank: result.blank,
    total: session.questions.length,
    topicMisses: result.topicMisses,
    date: new Date().toISOString()
  });
  renderResults(result);
}

function renderResults(result) {
  const pass = session.config.pass === null ? null : result.score >= session.config.pass;
  app.innerHTML = `
    <section class="panel review-panel">
      <p class="eyebrow">${session.title}</p>
      <h2>Resultats</h2>
      ${pass === null ? "" : `<span class="status ${pass ? "pass" : "fail"}">${pass ? "Apte/a" : "No apte/a"}</span>`}
      <div class="result-hero">
        <div class="result-card"><span>Encerts</span><strong>${result.correct}</strong></div>
        <div class="result-card"><span>Errors</span><strong>${result.wrong}</strong></div>
        <div class="result-card"><span>No contestades</span><strong>${result.blank}</strong></div>
        <div class="result-card"><span>Puntuacio</span><strong>${formatScore(result.score)}</strong></div>
        <div class="result-card"><span>Maxim</span><strong>${formatScore(session.config.max)}</strong></div>
      </div>
      <div class="actions">
        <button class="primary-button" id="repeatBtn" type="button">Repeteix amb preguntes noves</button>
        <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
      </div>
    </section>
    <section class="panel review-panel">
      <p class="eyebrow">Correccio</p>
      <h2>Pregunta per pregunta</h2>
      <div class="review-list">
        ${result.details.map(({ question, answer, state }, index) => {
          const answerLabel = answer === undefined || answer === null ? "No contestada" : question.options[answer];
          return `
            <article class="review-item ${state}">
              <div class="question-meta">
                <span class="pill">${state === "correct" ? "Correcta" : state === "wrong" ? "Incorrecta" : "En blanc"}</span>
                <span class="pill">${question.theme}</span>
                ${reviewPill(question)}
              </div>
              <h3>${index + 1}. ${question.prompt}</h3>
              <p><strong>La teva resposta:</strong> ${answerLabel}</p>
              <p><strong>Resposta correcta:</strong> ${question.options[question.correct]}</p>
              <p class="muted">${question.explanation}</p>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
  document.getElementById("repeatBtn").addEventListener("click", () => startExam(session.type));
  document.getElementById("homeBtn").addEventListener("click", renderHome);
}

function renderStudy() {
  const themes = [...new Set(QUESTION_BANK.map((question) => question.theme))];
  app.innerHTML = `
    <section class="panel review-panel">
      <div class="exam-header">
        <div>
          <p class="eyebrow">Mode estudi</p>
          <h2>Preguntes per tema</h2>
        </div>
        <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
      </div>
      <div class="study-controls">
        <label for="themeSelect">Tema</label>
        <select id="themeSelect">
          <option value="all">Tots els temes</option>
          ${themes.map((theme) => `<option value="${theme}">${theme}</option>`).join("")}
        </select>
      </div>
      <div class="study-list" id="studyList"></div>
    </section>
  `;
  document.getElementById("homeBtn").addEventListener("click", renderHome);
  const select = document.getElementById("themeSelect");
  const renderStudyList = () => {
    const chosen = select.value;
    const questions = prepareStudyQuestions(chosen === "all" ? QUESTION_BANK : QUESTION_BANK.filter((question) => question.theme === chosen));
    document.getElementById("studyList").innerHTML = questions.map((question) => `
      <article class="study-item" data-study="${question.id}">
        <div class="question-meta">
          <span class="pill">${question.theme}</span>
          <span class="pill">${question.document}</span>
          ${reviewPill(question)}
        </div>
        <h3>${question.prompt}</h3>
        <div class="options">
          ${question.studyOptions.map((option, index) => `
            <button class="option" data-study-option="${question.id}:${option.index}" type="button">
              <span class="option-marker">${String.fromCharCode(65 + index)}</span>
              <span>${option.text}</span>
            </button>
          `).join("")}
        </div>
        <div class="feedback" id="feedback-${question.id}" hidden></div>
      </article>
    `).join("");

    document.querySelectorAll("[data-study-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const [questionId, optionIndex] = button.dataset.studyOption.split(":");
        const question = QUESTION_BANK.find((item) => item.id === questionId);
        const chosenIndex = Number(optionIndex);
        const wrapper = document.querySelector(`[data-study="${questionId}"]`);
        wrapper.querySelectorAll(".option").forEach((optionButton) => {
          const [, rawIndex] = optionButton.dataset.studyOption.split(":");
          const itemIndex = Number(rawIndex);
          optionButton.classList.toggle("is-correct", itemIndex === question.correct);
          optionButton.classList.toggle("is-wrong", itemIndex === chosenIndex && itemIndex !== question.correct);
        });
        const feedback = document.getElementById(`feedback-${questionId}`);
        feedback.hidden = false;
        feedback.className = `feedback ${chosenIndex === question.correct ? "good" : "bad"}`;
        feedback.innerHTML = `
          <strong>${chosenIndex === question.correct ? "Resposta correcta." : "Resposta incorrecta."}</strong>
          <p>Resposta correcta: ${question.options[question.correct]}</p>
          <p>${question.explanation}</p>
        `;
      });
    });
  };

  select.addEventListener("change", renderStudyList);
  renderStudyList();
}

function renderPlainTextStudy() {
  app.innerHTML = `
    <section class="panel review-panel">
      <div class="exam-header">
        <div>
          <p class="eyebrow">Temari per temes</p>
          <h2>Lectura d'estudi</h2>
        </div>
        <button class="secondary-button" id="homeBtn" type="button">Torna a l'inici</button>
      </div>
      <div class="study-controls">
        <label for="textTopicSelect">Tema</label>
        <select id="textTopicSelect">
          ${STUDY_TEXT.map((item, index) => `<option value="${index}">${contentKey(item)} - ${item.title}</option>`).join("")}
        </select>
        <div class="study-navigation">
          <button class="ghost-button" id="textPrevBtn" type="button">Tema anterior</button>
          <button class="ghost-button" id="textNextBtn" type="button">Tema següent</button>
        </div>
      </div>
      <div id="plainTextContent"></div>
    </section>
  `;
  document.getElementById("homeBtn").addEventListener("click", renderHome);
  const select = document.getElementById("textTopicSelect");
  const prevBtn = document.getElementById("textPrevBtn");
  const nextBtn = document.getElementById("textNextBtn");
  const topicCount = STUDY_TEXT.length;
  const updateNavState = () => {
    const currentIndex = Number(select.value);
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= topicCount - 1;
  };
  const renderTopic = () => {
    const item = STUDY_TEXT[Number(select.value)];
    document.getElementById("plainTextContent").innerHTML = `
      <article class="plain-study">
        <div class="content-heading">
          <div>
            <p class="eyebrow">${contentKey(item)}</p>
            <h3>${item.title}</h3>
          </div>
          ${contentReviewPill(item)}
        </div>
        <p class="lead-text">${item.summary}</p>
        <div class="plain-grid">
          <section>
            <h3>Conceptes essencials</h3>
            <ul>${item.keyConcepts.map((text) => `<li>${text}</li>`).join("")}</ul>
          </section>
          <section>
            <h3>Punts testables</h3>
            <ul>${item.testablePoints.map((text) => `<li>${text}</li>`).join("")}</ul>
          </section>
          <section>
            <h3>Fonts base</h3>
            <ul>${item.sources.map((text) => `<li>${text}</li>`).join("")}</ul>
          </section>
        </div>
        <div class="study-guide-block">
          <h3>Pauta d'estudi</h3>
          <ul>${item.studyGuide.map((text) => `<li>${text}</li>`).join("")}</ul>
        </div>
      </article>
    `;
    updateNavState();
  };
  prevBtn.addEventListener("click", () => {
    const currentIndex = Number(select.value);
    if (currentIndex <= 0) return;
    select.value = String(currentIndex - 1);
    renderTopic();
  });
  nextBtn.addEventListener("click", () => {
    const currentIndex = Number(select.value);
    if (currentIndex >= topicCount - 1) return;
    select.value = String(currentIndex + 1);
    renderTopic();
  });
  select.addEventListener("change", renderTopic);
  renderTopic();
}

function openResetModal() {
  confirmResetModal.hidden = false;
  cancelResetBtn.focus();
}

function closeResetModal() {
  confirmResetModal.hidden = true;
  resetStatsBtn.focus();
}

resetStatsBtn.addEventListener("click", openResetModal);

cancelResetBtn.addEventListener("click", closeResetModal);

confirmResetBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  closeResetModal();
  if (!session) renderStats();
});

confirmResetModal.addEventListener("click", (event) => {
  if (event.target === confirmResetModal) closeResetModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !confirmResetModal.hidden) closeResetModal();
});

renderHome();

