export default function setupDetails() {
  document.addEventListener("click", (e) => {
    const summary = e.target.closest("summary");
    if (!summary) return;
    const details = summary.parentElement;
    if (!details || details.tagName !== "DETAILS") return;

    if (details.dataset.animating) {
      e.preventDefault();
      return;
    }

    // Check if we need to close others (accordion)
    if (!details.hasAttribute("open") && details.hasAttribute("name")) {
      const name = details.getAttribute("name");
      const others = document.querySelectorAll(`details[name="${name}"][open]`);
      others.forEach((other) => {
        if (other !== details) {
          other.removeAttribute("name"); // temp remove so native HTML doesn't instantly close it
          animateDetails(other, false).then(() => {
            other.setAttribute("name", name);
          });
        }
      });
    }

    e.preventDefault();
    const isOpening = !details.hasAttribute("open");
    animateDetails(details, isOpening);
  });
}

function animateDetails(details, isOpening) {
  details.dataset.animating = "true";

  // Determine animation duration based on classes
  let duration = 300;
  if (details.classList.contains("fast-animate")) duration = 150;
  else if (details.classList.contains("slow-animate")) duration = 500;
  else if (details.classList.contains("no-animate")) duration = 0;

  // Measure start height
  const startHeight = `${details.offsetHeight}px`;

  // Temporarily toggle open to measure the target end height accurately
  if (isOpening) {
    details.setAttribute("open", "");
  } else {
    details.removeAttribute("open");
  }

  const endHeight = `${details.offsetHeight}px`;

  // Set up the element for the animation
  if (!isOpening) {
    // Re-add "open" so it can animate down from the opened state
    details.setAttribute("open", "");
    // Add is-closing class so the icon rotates back immediately
    details.classList.add("is-closing");
  }

  // Start animation
  const animation = details.animate(
    { height: [startHeight, endHeight] },
    { duration, easing: "ease-out" },
  );

  details.style.overflow = "hidden";

  return new Promise((resolve) => {
    animation.onfinish = () => {
      details.style.height = "";
      details.style.overflow = "";
      if (!isOpening) {
        details.removeAttribute("open");
        details.classList.remove("is-closing");
      }
      delete details.dataset.animating;
      resolve();
    };
    animation.oncancel = () => {
      details.style.height = "";
      details.style.overflow = "";
      if (!isOpening) {
        details.classList.remove("is-closing");
      }
      delete details.dataset.animating;
      resolve();
    };
  });
}
