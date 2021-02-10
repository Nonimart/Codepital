import {docteur, pharmacie} from './variables.js'


console.log(`🏥 Bienvenue à CODEPITAL 🏥`)

// Tous les malades rentrent dans la salle d'attente
console.log(`Les malades sont dans la salle d'attente : `, docteur.salleAttente)

let patients = [...docteur.salleAttente]
console.log(`les patients : `,patients);


// BOUCLE DES PATIENTS
    patients.forEach(patient=>{
            console.log(`#######################  ${patient.nom }   ###################################`)
            docteur.patientIn(patient)
            docteur.diagnostiquer(patient)
            patient.payer(docteur,50)
            docteur.patientOut(patient)
    
            patient.goTo(pharmacie)
            pharmacie.recevoir(patient) 
    })





// LA VERSION FOR
// let ticketList = docteur.salleAttente.length

// for(let i = 0; i < ticketList; i++){
//     // setTimeout(function(){ 
//         console.log('##########################################################');

//         docteur.patientIn(sdfsdf)    
//         docteur.diagnostiquer(docteur.cabinet[0])
//         docteur.patientOut(sdfsdf)

//         Malade.goTo(pharmacie)

        
//     // }, 2000+(i*2000))
//     i--
// }
