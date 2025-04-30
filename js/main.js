function bytBild(miniatyr, nyBildKalla) {
  document.querySelectorAll(".miniatyr").forEach((img) => {
    img.classList.remove("aktiv");
  });
  miniatyr.classList.add("aktiv");
  document.getElementById("huvudBild").src = nyBildKalla;
}





function valjSpec(knapp) {
    const foraldraDiv = knapp.parentElement;
    foraldraDiv.querySelectorAll('.spec-knapp').forEach(btn => {
        btn.classList.remove('vald');
    });
    knapp.classList.add('vald');
}