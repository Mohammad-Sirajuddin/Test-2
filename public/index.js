async function PostInformation() {
  const nameVal = document.getElementById("name").value;
  const categoryVal = document.getElementById("category").value;
  const materialVal = document.getElementById("material").value;
  const diameterVal = document.getElementById("diameter").value;

  const response = await fetch("http://localhost:3002/api/parts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameVal,
      category: categoryVal,
      material: materialVal,
      diameter: diameterVal,
    }),
  });
  const json = await response.json();
  alert(json.message);

  getInformation();
}

async function getInformation() {
  const response = await fetch("http://localhost:3002/api/parts", {
    method: "GET",
  });

  document.querySelectorAll(".outputBox").forEach(el => el.remove());
  
  const json = await response.json();
  json.Parts.forEach((part) => {
    const { outputBox, idEl, nameEl, categoryEl, materialEl, diameterEl } =
      outputBoxCreation();

    idEl.innerHTML = part.id;
    nameEl.innerHTML = part.name;
    categoryEl.innerHTML = part.category;
    materialEl.innerHTML = part.material;
    diameterEl.innerHTML = part.diameter;

    document.body.appendChild(outputBox);
  });
}

function outputBoxCreation() {
  const outputBox = document.createElement("div");
  outputBox.className = "outputBox";

  const idEl = document.createElement("div");
  idEl.className = "headers-items";
  const nameEl = document.createElement("div");
  nameEl.className = "headers-items";
  const categoryEl = document.createElement("div");
  categoryEl.className = "headers-items";
  const materialEl = document.createElement("div");
  materialEl.className = "headers-items";
  const diameterEl = document.createElement("div");
  diameterEl.className = "headers-items";

  outputBox.appendChild(idEl);
  outputBox.appendChild(nameEl);
  outputBox.appendChild(categoryEl);
  outputBox.appendChild(materialEl);
  outputBox.appendChild(diameterEl);

  return { outputBox, idEl, nameEl, categoryEl, materialEl, diameterEl };
}
