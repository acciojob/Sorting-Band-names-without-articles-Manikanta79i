const bands = ["The Beatles", "Adele", "The Rolling Stones", "Elton John", "Nirvana", "Led Zeppelin", "The Who", "Pink Floyd"];

function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector("#bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");
