export function clickOutside(node) {
  const handleClick = (event) => {
    if (event.clientX > 300 || event.clientY < 50) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
