const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var submit = document.getElementById("submit-btn");
submit.addEventListener("click", function () {
  var email = document.getElementById("email").value;
  if (regex.test(email)) {
    document.querySelector(".info-detail").classList.remove("hidden");
    document.querySelector(".email-request").classList.add("hidden");
  }
});

document.addEventListener(
  "DOMContentLoaded",
  showHide(".education-container", "education", "education-view-more"),
  showHide(".experience-container", "experience", "experience-view-more"),
  showHide(".container-skill", "skill", "skill-view-more"),
  showHide(".language-container", "language", "language-btn"),
  showHide(".favorite-contaier-1", "favorite", "favorite-btn"),
  showHide(".active-container", "active", "active-btn")
);

function showHide(containerClass, content, button) {
  const container = document.querySelector(containerClass);
  const educationSection = document.getElementById(content);
  const viewMoreBtn = document.getElementById(button);

  container.addEventListener("mouseover", function () {
    viewMoreBtn.style.display = "block";
  });

  container.addEventListener("mouseout", function () {
    if (educationSection.style.display !== "block") {
      viewMoreBtn.style.display = "none";
    }
  });
  viewMoreBtn.addEventListener("click", function () {
    if (viewMoreBtn.textContent.includes("more")) {
      educationSection.style.display = "block";
      viewMoreBtn.textContent = "🔺View less";
    } else {
      educationSection.style.display = "none";
      viewMoreBtn.textContent = "🔻View more";
    }
  });
}
