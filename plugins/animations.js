import Vue from "vue";

const ANIMATION_CLASSES = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "scale-in",
  "zoom-in",
];

function getAnimationClass(modifiers) {
  for (const cls of ANIMATION_CLASSES) {
    if (modifiers[cls]) return `v-animate--${cls}`;
  }
  return "v-animate--fade-up";
}

Vue.directive("animate", {
  inserted(el, binding) {
    const animClass = getAnimationClass(binding.modifiers);
    const delay = parseInt(binding.value, 10) || 0;

    el.classList.add("v-animate", animClass);
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v-animate--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    el._animateObserver = observer;
  },

  unbind(el) {
    if (el._animateObserver) {
      el._animateObserver.disconnect();
    }
  },
});
