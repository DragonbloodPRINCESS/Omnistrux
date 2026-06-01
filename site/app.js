const pendingMessage = "This form is not collecting submissions yet. The public launch needs a verified endpoint and consent review before it goes live.";

document.querySelectorAll("form[data-pending='true']").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = pendingMessage;
    }
  });
});

document.querySelectorAll("a[data-pending='true']").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("data-status-target");
    const status = target ? document.querySelector(target) : null;
    if (status) {
      status.textContent = "This link is pending verified approval before public launch.";
    }
  });
});
