
let team = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg", },
    { nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg", },
    { nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg", },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg", },
    { nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg", },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg", }


]
console.log(team)

const container = document.getElementById("container");

for (let i = 0; i < team.length; i++) {
    let membro = team[i]

    container.innerHTML += `<div class="card">
                            <img src="./img/${membro.immagine}"></img>
                            <p>Nome: ${membro.nome}</p>
                            <p>Ruolo: ${membro.ruolo}</p>
                            </div>`
}