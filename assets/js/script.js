document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipTriggerList.forEach(function (tooltipTriggerElement) {
    new bootstrap.Tooltip(tooltipTriggerElement);
  });
});