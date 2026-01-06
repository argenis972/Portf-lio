const API_BASE = "http://localhost:8000/api";
const DEFAULT_LANG = "en";
const LANG_KEY = "portfolio.lang";

let t = {};

function byId(id) {
  return document.getElementById(id);
}

async function loadTranslations(lang) {
  const res = await fetch(`./i18n/${lang}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load translations");
  t = await res.json();
}

function applyTranslations() {
  byId("ui_title").textContent = t.ui_title;
  byId("ui_subtitle").textContent = t.ui_subtitle;
  byId("ui_language_label").textContent = t.ui_language_label;

  byId("ui_profile_title").textContent = t.ui_profile_title;
  byId("ui_projects_title").textContent = t.ui_projects_title;
  byId("ui_contact_title").textContent = t.ui_contact_title;

  byId("ui_name_label").textContent = t.ui_name_label;
  byId("ui_email_label").textContent = t.ui_email_label;
  byId("ui_message_label").textContent = t.ui_message_label;
  byId("ui_send_button").textContent = t.ui_send_button;

  byId("ui_footer").textContent = t.ui_footer;
}

async function fetchJson(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`API error (${res.status})`);
  return res.json();
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProfile(data) {
  const el = byId("profile");
  const skills = (data.skills || [])
    .map((s) => `<span class="badge">${escapeHtml(s)}</span>`)
    .join("");

  el.innerHTML = `
    <p><strong>${escapeHtml(data.name)}</strong> — ${escapeHtml(data.role)}</p>
    <p class="muted">${escapeHtml(data.location)}</p>
    <p>${escapeHtml(data.summary)}</p>
    <div class="badges">${skills}</div>
  `;
}

function renderProjects(data) {
  const el = byId("projects");
  el.innerHTML = "";

  (data.projects || []).forEach((p) => {
    const stack = (p.stack || [])
      .map((s) => `<span class="badge">${escapeHtml(s)}</span>`)
      .join("");

    const url = p.url
      ? `<a href="${p.url}" target="_blank" rel="noreferrer">${t.ui_project_link}</a>`
      : "";

    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <h3>${escapeHtml(p.name)}</h3>
      <p class="muted">${escapeHtml(p.description)}</p>
      <div class="badges">${stack}</div>
      <div style="margin-top:10px">${url}</div>
    `;
    el.appendChild(div);
  });
}

async function initApiData() {
  const [profile, projects] = await Promise.all([
    fetchJson("/profile"),
    fetchJson("/projects"),
  ]);

  renderProfile(profile);
  renderProjects(projects);
}

async function initLanguage() {
  const saved = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  const select = byId("langSelect");
  select.value = saved;

  await loadTranslations(saved);
  applyTranslations();

  select.addEventListener("change", async () => {
    const lang = select.value;
    localStorage.setItem(LANG_KEY, lang);
    await loadTranslations(lang);
    applyTranslations();
    await initApiData();
  });
}

function initContactForm() {
  const form = byId("contactForm");
  const status = byId("contactStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = t.ui_sending;

    const payload = {
      name: byId("name").value.trim(),
      email: byId("email").value.trim(),
      message: byId("message").value.trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        status.textContent = t.ui_contact_error;
        return;
      }

      status.textContent = data.detail || t.ui_contact_success;
      form.reset();
    } catch {
      status.textContent = t.ui_contact_error;
    }
  });
}

(async function main() {
  await initLanguage();
  await initApiData();
  initContactForm();
})();