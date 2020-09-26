const responsiveNav = () => {
  let showSideBar = false;
  const burger = document.getElementById("burger__menu");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const burgerchild = document.querySelectorAll("#burger__menu div");

  const navEvent = (e) => {
    if (!showSideBar) {
      burger.classList.add("cross");
      backdrop.classList.add("show");
      sidebar.classList.add("show");
      burgerchild.forEach((item) => {
        item.style.background = "#000";
      });
    } else {
      burger.classList.remove("cross");
      backdrop.classList.remove("show");
      sidebar.classList.remove("show");
      burgerchild.forEach((item) => {
        item.style.background = "";
      });
    }

    showSideBar = !showSideBar;
  };

  burger.addEventListener("click", navEvent, true);
  backdrop.addEventListener("click", navEvent, true);
};

const scrollNav = () => {
  const mainHeader = document.getElementById("main__header");
  const landingView = document.getElementById("landing__view");

  console.log();

  const landingViewOptions = {
    rootMargin: "-100% 0% 0% 0% ",
  };

  const landingViewObserver = new IntersectionObserver(
    (entriens, landingViewObserver) => {
      entriens.forEach((entry) => {
        if (!entry.isIntersecting) {
          mainHeader.classList.add("scrolled");
        } else {
          mainHeader.classList.remove("scrolled");
        }
      });
    },
    landingViewOptions
  );

  landingViewObserver.observe(landingView);
};
