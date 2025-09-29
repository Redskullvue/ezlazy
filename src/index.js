(function () {
  // The main function to load element on observer call
  function loadElement(el) {
    // Checks for the <img>
    if (el.dataset.ezlazy) {
      el.src = el.dataset.ezlazy;
      el.removeAttribute("data-ezlazy");
    }
    // Checks for the CSS images
    if (el.dataset.ezlazyBg) {
      el.style.backgroundImage =
        el.style.backgroundImage = `url(${el.dataset.ezlazyBg})`;
      el.removeAttribute("data-ezlazy-bg");
    }

    el.classList.add("ezlazy-loaded");
  }

  //This function runs to check the DOM for elments beacuse the elements array will not be live
  function checkDom() {
    const elements = document.querySelectorAll(
      "[data-ezlazy] , [data-ezlazy-bg]"
    );
    // Check If the observer is available in browser
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (enteries, obs) => {
          enteries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadElement(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "150px" }
      );

      elements.forEach((el) => observer.observe(el));
    } else {
      // Fallback : Load All elements if the browser didn't support
      elements.forEach((el) => loadElement(el));
    }
  }

  //Check If DOM is loaded or not
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkDom);
  } else {
    checkDom();
  }
})();
