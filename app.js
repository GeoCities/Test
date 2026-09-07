const views = [...document.querySelectorAll(".view")];
const navigation = [...document.querySelectorAll("[data-view]")];
const modal = document.querySelector("#compose-modal");
const toast = document.querySelector(".toast");
let toastTimer;

function showView(name) {
  const target = document.getElementById(name);
  if (!target) return;

  views.forEach((view) => view.classList.toggle("is-active", view === target));
  navigation.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.view === name),
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(
    () => toast.classList.remove("is-visible"),
    2800,
  );
}

navigation.forEach((button) =>
  button.addEventListener("click", () => showView(button.dataset.view)),
);
document.querySelectorAll("[data-view-link]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});

document.querySelectorAll("[data-inbox]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-inbox]")
      .forEach((tab) => tab.classList.toggle("is-active", tab === button));
    document
      .querySelectorAll(".inbox-list")
      .forEach((list) =>
        list.classList.toggle("is-active", list.id === button.dataset.inbox),
      );
  });
});

document.querySelectorAll("[data-compose]").forEach((button) =>
  button.addEventListener("click", () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".close").focus();
  }),
);
document
  .querySelectorAll("[data-close]")
  .forEach((button) => button.addEventListener("click", closeModal));
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document
  .querySelectorAll("[data-toast]")
  .forEach((button) =>
    button.addEventListener("click", () => notify(button.dataset.toast)),
  );
document.querySelectorAll("[data-follow]").forEach((button) =>
  button.addEventListener("click", () => {
    const following = button.classList.toggle("is-following");
    button.textContent = following ? "✓ Following" : "+ Follow";
    notify(following ? "Following this place" : "Unfollowed this place");
  }),
);
document.querySelectorAll("[data-prompt]").forEach((button) =>
  button.addEventListener("click", () => {
    const input = document.querySelector(".prompt input");
    input.value = button.dataset.prompt;
    input.focus();
  }),
);
