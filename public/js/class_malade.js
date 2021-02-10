export default class Malade {
    constructor( icon,nom,maladie,argent){
        this.icon = icon,
        this.nom = nom,
        this.maladie = maladie,
        this.argent = argent,
        this.etatSante = "malade",
        this.poche  = []

        this.leavePlace = (depart) => {
            depart.visiteurs.splice( depart.visiteurs.indexOf(this))
            console.log(`${this.nom} sort de ${depart.icon} ${depart.nom}`)
        }

        this.goTo = (arrivee)=> {
            arrivee.visiteurs.push(this)
            console.log(`${this.nom} se rend à ${arrivee.icon} ${arrivee.nom}`)
        }   

        // Ou traitement c'est peut etre une propriété tableau ? 
        this.prendreTraitement	= () => {
            this.etatSante = "Guéri"
        }

        this.mourir = (lieu) =>{
            this.etatSante = "mort",
            lieu.tombes.push(this) 
            console.log(`  ✞ 💀 ⚰️ Le pauvre ${this.icon}${this.nom} meurt et se fait enterrer au cimetière`, lieu.tombes)
        }

        this.payer = (receveur,prix)=> {
            this.argent -= prix
            receveur.argent += prix
            console.log(`💸 💸 | ${this.icon} ${this.nom} vient de payer ${receveur.icon}${receveur.nom}. Il lui reste désormais : ${this.argent} €`) 
        }

    }
    
}
