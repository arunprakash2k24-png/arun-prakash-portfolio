/* =====================================================
   PORTFOLIO JAVASCRIPT
   Arun Prakash P
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle?.addEventListener("click", () => {

  const isOpen =
    navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.textContent =
    isOpen ? "×" : "☰";

});


/* Close mobile menu after clicking */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

      if (menuToggle) {
        menuToggle.textContent = "☰";
      }

    });

  });


/* ================= THEME ================= */

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

  document.body.classList.add("light");

  if (themeToggle) {
    themeToggle.textContent = "☀";
  }

}


themeToggle?.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "portfolio-theme",
    light ? "light" : "dark"
  );

  themeToggle.textContent =
    light ? "☀" : "☾";

});


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


/* ================= CERTIFICATE MODAL ================= */

const modal =
  document.getElementById("certModal");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");


const closeModal = () => {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

};


document
  .querySelectorAll(".cert-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      const image =
        button.dataset.image;

      const title =
        button.dataset.title;

      modalImage.src = image;

      modalImage.alt =
        `${title} certificate preview`;

      modalTitle.textContent =
        title;

      modal.classList.add("open");

      modal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

    });

  });


document
  .getElementById("modalClose")
  ?.addEventListener(
    "click",
    closeModal
  );


document
  .getElementById("modalBackdrop")
  ?.addEventListener(
    "click",
    closeModal
  );


/* Close modal using Escape */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("open")
    ) {

      closeModal();

    }

  }
);


/* ================= ACTIVE NAV ================= */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );


const activeSectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const current =
            entry.target.getAttribute("id");

          navItems.forEach(link => {

            link.classList.remove("active");

            if (
              link.getAttribute("href") ===
              `#${current}`
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      threshold: 0.45
    }
  );


sections.forEach(section => {

  activeSectionObserver.observe(section);

});


/* ================= IMAGE ERROR HANDLING ================= */

document
  .querySelectorAll(".cert-image img")
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        image.style.display = "none";

        image.parentElement.classList.add(
          "image-error"
        );

      }
    );

  });
