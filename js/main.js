
let utenti = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg", },
    { nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg", },
    { nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg", },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg", },
    { nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg", },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg",}

    
]
console.log(utenti)



// Stampare su console il nome e il ruolo di ogni membro del team
utenti.forEach((membro) => {
    console.log("Nome:", membro.nome, "| Ruolo:", membro.ruolo);
  });
  
  // Trova un elemento HTML dove vuoi stampare i dettagli del team
  const container = document.getElementById("container");
  
  // Stampare in pagina nome, ruolo e immagine per ogni membro del team
  utenti.forEach((membro) => {
    const elemento = document.createElement("div");
    elemento.textContent = `Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Immagine: ${membro.immagine}`;
    container.appendChild(elemento);
  });