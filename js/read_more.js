function myFunction(hostElement) {
  debugger;
  console.log(hostElement);

  const prevElem = hostElement.previousElementSibling;
  const children = prevElem.children;

  children[0].classList.toggle("display-inline");
  children[1].classList.toggle("display-none");
  return;

}