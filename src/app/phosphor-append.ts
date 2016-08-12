export function phosphorAppend(id: string) {
  let component = document.getElementById(id);
  component.parentNode.removeChild(component);
  let container = document.getElementById(id + '-container');
  container.appendChild(component);
}
