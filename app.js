const data = [
  { type: "Zooming", icon: "🔍✨", mode: "M", exposure: "Matricielle", aperture: "f/8–f/11", speed: "1/2s à 2s", iso: "100–200", wb: "Lumière du jour", af: "MF ou AF-S", focal: "24–70 mm", nd: "ND4 à ND8", notes: "Zoom pendant la pose, trépied indispensable" },
  { type: "Exploding objects", icon: "💥📸", mode: "M", exposure: "Matricielle", aperture: "f/5.6–f/8", speed: "1/1000 à 1/4000", iso: "100–400", wb: "Auto", af: "AF-C", focal: "50–200 mm", nd: "Non", notes: "Mode rafale, arrière-plan neutre recommandé" }
];
const tbody = document.querySelector("#settingsTable tbody");
data.forEach(entry => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${entry.type}</td><td>${entry.icon}</td><td>${entry.mode}</td><td>${entry.exposure}</td>
    <td>${entry.aperture}</td><td>${entry.speed}</td><td>${entry.iso}</td><td>${entry.wb}</td>
    <td>${entry.af}</td><td>${entry.focal}</td><td>${entry.nd}</td><td>${entry.notes}</td>`;
  tbody.appendChild(tr);
});