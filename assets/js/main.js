
function light() {
    let p = document.querySelectorAll("p")
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "black";
    }
    /*
       let test = document.querySelectorAll('a');
       for (let i = 0; i < test.length; i++) {
        if (test[i].querySelectorAll("p").length > 0) {
            let listP = test[i].querySelectorAll("p");
           for (let j = 0; j < listP.length; j++) {
            listP[j].style.setProperty('color','white', "important")
           
           }
        }
        
       }*/
    let header = document.querySelector("header")
    header.style.setProperty('background-color', 'gray', "important")

    let title = document.querySelector("h1")
    title.style.color = "black"

    let head = document.querySelector("nav")
    head.style.backgroundColor = "gray";

    let propos = document.querySelector("#colorjs")
    propos.style.setProperty('color', 'black', "important")


    let footer = document.querySelector("footer")
    footer.style.setProperty('background-color', 'grey', "important")

    let body = document.querySelector("main")
    body.style.setProperty("background", " white", "important");

    let bio = document.querySelector("#bio")
    bio.style.color = "black";

    let line = document.querySelectorAll("hr")
    line.style.color = "black";


}

let isTrad = false
function trad() {



    if (isTrad == true) {
        //header
        document.querySelector('#h1').innerText = "JUNIOR WEB DEVELOPER"
        document.querySelector('#colorjs').innerText = "ABOUT"
        document.querySelector('#tradone').innerText = "SKILLS"
        //a propos
        document.querySelector('#bio').innerText = "ABOUT"
        document.querySelector('#pone').innerText = "Hello, my name is Killian FONTAINE junior web developer, I am looking for a job. Autonomous by nature, I can work alone or in a team, also being able to adapt to an environment that I do not know. Always seeking to improve and optimize projects as much as possible to best satisfy the customer's request."
        //comp
        document.querySelector('#comp').innerText = "SKILLS"
        document.querySelector('#h3').innerText = "Operating systems :"
        document.querySelector("#h32").innerText = "LANGUAGE :"
        document.querySelector("#fr").innerText = "FRENCH"
        document.querySelector("#en").innerText = "ENGLISH"
        document.querySelector("#fun").innerText = "HOBBIES :"
        document.querySelector("#jv").innerText = "VIDEO GAMES"
        document.querySelector("#lire").innerText = "READING"
        document.querySelector("#basket").innerText = "BASKETBALL"
        //exp 
        document.querySelector('#exp').innerText = "PROFESSIONAL EXPERIENCE"
        document.querySelector("#exp1").innerText = "informatique maintenance technician"
        document.querySelector("#exp2").innerText = "Computer maintenance network technician"
        document.querySelector("#exp3").innerText = "Technician / customer service"
        document.querySelector("#exp4").innerText = "server in restoration"
        //formation
        document.querySelector("#bac").innerText = "Bac pro  Digital Systems BEP Digital Systems"
        document.querySelector("#bac1").innerText = "Bac pro/BEP: installing operating systems, managing customer demand, diagnosing a breakdown."
        document.querySelector("#cap").innerText = "CAP Restoration"
        document.querySelector("#cap1").innerText = "CAP: customer reception, taking orders, table service, teamwork"
        document.querySelector("#dnb").innerText = "National Patent Diplomas"
        //form
        document.querySelector("#mail").innerText = "Email:"
        document.querySelector("#mess").innerText = "Your message:"
        document.querySelector("#envoyer").innerText = "Send"
        //footer
        document.querySelector("#cv").innerText = "download my CV"
    } else {
        //header
        document.querySelector("#h1").innerText = "DEVELOPPEUR WEB JUNIOR"
        document.querySelector("#colorjs").innerText = "A PROPOS"
        document.querySelector("#tradone").innerText = "COMPETENCES"
        //a propos
        document.querySelector("#bio").innerText = "A PROPOS"
        document.querySelector("#pone").innerText = "Bonjour, je m'appelle Killian FONTAINE développeur web junior, je suis à la recherche d'un emploi. Autonome de nature, je peux travailler seul ou en équipe, étant également capable de m’adapter à un environnement que je ne connais pas. Cherchant toujours à améliorer et optimiser les projets au maximum pour satisfaire au mieux la demande du client."
        //comp
        document.querySelector("#comp").innerText = "COMPETENCES"
        document.querySelector("#h3").innerText = "Systèmes d'exploitation :"
        document.querySelector("#h32").innerText = "LANGUE :"
        document.querySelector("#fr").innerText = "FRANÇAIS"
        document.querySelector("#en").innerText = "ANGLAIS"   
        document.querySelector("#fun").innerText = "LOISIRS :"
        document.querySelector("#jv").innerText = "JEUX VIDEOS"
        document.querySelector("#lire").innerText = "LIRE"
        document.querySelector("#basket").innerText = "BASKET"
        //exp
        document.querySelector("#exp").innerText = "EXPERIENCES PROFESSIONNELLES"
        document.querySelector("#exp1").innerText = "Technicien maintenance informatique"
        document.querySelector("#exp2").innerText = "Technicien réseau informatique Ecole centrale Marseille"
        document.querySelector("#exp3").innerText = "Technicien/acceuil client"
        document.querySelector("#exp4").innerText = "serveur en restauration"
        //formation
        document.querySelector("#bac").innerText = "Bac Professionnel Systèmes Numériques BEP Systèmes Numériques"
        document.querySelector("#bac1").innerText = "Bac pro/BEP: installer des sytèmes d'exploitation, gérer la demande du client, diagnostiquer une panne."
        document.querySelector("#cap").innerText = "CAP Restauration"
        document.querySelector("#cap1").innerText = "CAP: acceuil client, prendre des commandes, service à table, travailler en equipe"
        document.querySelector("#dnb").innerText = "Dîplomes National du Brevet"
        //form
        document.querySelector("#mail").innerText = "Email:"
        document.querySelector("#mess").innerText = "Votre message:"
        document.querySelector("#envoyer").innerText = "Envoyer"
        //footer
        document.querySelector("#cv").innerText = "TELECHARGER MON CV"
    }
    isTrad = !isTrad
}



