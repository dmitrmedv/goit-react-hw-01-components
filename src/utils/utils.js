export function getRandomHexColor() {
  const rgb = [];
  for (let index = 0; index < 3; index++) {
    let color = Math.floor(Math.random() * 200);
    rgb.push(color);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

export function setWidth(arr) {
  return 100 / arr.length;
}
