const button = document.querySelector("button");
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}
function clickHandler(event: MouseEvent) {
  console.log("Clicked!" + event);
}
button?.addEventListener("click", clickHandler);
