// ===== CONFIGURE AQUI =====
const WHATSAPP = "5561920023881"; // DDI 55 + DDD 61 + número, só dígitos

const projetos = [
  {t:"Predial",   n:"Edifício comercial",     d:"Instalação elétrica completa e quadros gerais.", i:"predial"},
  {t:"Residencial",n:"Casa de alto padrão",   d:"Instalação, aterramento e automação de iluminação.", i:"residencial"},
  {t:"Iluminação",n:"Loja e showroom",        d:"Projeto luminotécnico com LED e cenas de luz.", i:"iluminacao"},
  {t:"Quadros",   n:"Quadro de comando",      d:"Montagem, identificação e testes de funcionamento.", i:"quadros"},
  {t:"Residencial",n:"Reforma de apartamento",d:"Troca de fiação antiga e novo quadro de distribuição.", i:"apartamento"},
  {t:"Predial",   n:"Condomínio",             d:"Adequação das áreas comuns e laudo técnico.", i:"condominio"}
];

const $ = s => document.querySelector(s);
let tipo = "todos";

function renderProjetos(){
  const box = $("#projetos-lista");
  box.innerHTML = "";
  projetos.filter(p => tipo === "todos" || p.t === tipo).forEach(p => {
    const el = document.createElement("article");
    el.className = "proj";
    el.innerHTML = '<div class="foto" role="img" aria-label="Ilustração do projeto"></div><div><small></small><h3></h3><p></p></div>';
    el.querySelector(".foto").style.backgroundImage = "linear-gradient(135deg,rgba(123,44,191,.28),rgba(255,138,31,.16)), url(img/" + p.i + ".jpg), url(img/" + p.i + ".svg)";
    el.querySelector("small").textContent = p.t;
    el.querySelector("h3").textContent = p.n;
    el.querySelector("p").textContent = p.d;
    box.appendChild(el);
  });
}
$("#filtros").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if(!b) return;
  tipo = b.dataset.t;
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b));
  renderProjetos();
});
renderProjetos();

// modo escuro / claro (escuro é o padrão; a escolha fica salva no navegador)
const raiz = document.documentElement, tb = $("#temaBtn");
function aplicarTema(t){
  raiz.dataset.tema = t;
  const escuro = t !== "claro";
  tb.textContent = escuro ? "☾" : "☀";
  tb.setAttribute("aria-pressed", escuro);
  tb.setAttribute("aria-label", escuro ? "Mudar para modo claro" : "Mudar para modo escuro");
}
aplicarTema(raiz.dataset.tema === "claro" ? "claro" : "escuro");
tb.onclick = () => {
  const novo = raiz.dataset.tema === "claro" ? "escuro" : "claro";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch(e) {}
};

// menu mobile
const nav = $("#nav"), mb = $("#menuBtn");
mb.onclick = () => { const a = nav.classList.toggle("aberto"); mb.setAttribute("aria-expanded", a); };
nav.addEventListener("click", e => { if(e.target.tagName === "A"){ nav.classList.remove("aberto"); mb.setAttribute("aria-expanded","false"); } });

// formulário -> WhatsApp
function erro(id, m){ document.querySelector('[data-for="'+id+'"]').textContent = m; return !m; }
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const nome = $("#nome").value.trim(), serv = $("#servico").value, msg = $("#msg").value.trim();
  const ok = [
    erro("nome", nome.length < 3 ? "Digite seu nome." : ""),
    erro("servico", serv ? "" : "Escolha um serviço."),
    erro("msg", msg.length < 10 ? "Descreva o que você precisa (mínimo 10 letras)." : "")
  ];
  if(ok.includes(false)) return;
  const texto = "Olá, sou " + nome + ". Serviço: " + serv + ". " + msg;
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto), "_blank");
  e.target.reset();
});

// contadores
const io = new IntersectionObserver(es => es.forEach(en => {
  if(!en.isIntersecting) return;
  io.unobserve(en.target);
  const alvo = +en.target.dataset.n, suf = en.target.dataset.s || "", t0 = performance.now();
  (function f(t){
    const p = Math.min((t - t0) / 1200, 1);
    en.target.textContent = Math.round(alvo * p) + (p === 1 ? suf : "");
    if(p < 1) requestAnimationFrame(f);
  })(t0);
}));
document.querySelectorAll("[data-n]").forEach(el => io.observe(el));

$("#ano").textContent = new Date().getFullYear();