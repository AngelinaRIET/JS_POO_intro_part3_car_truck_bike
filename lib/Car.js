
// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./ANSIColours.js';

let AC = new ANSIColours();
/**
 * Classe Car
 * Permet de créer une voiture lambda 
 *
 */
export default class Car{

    /**
     * Crée une nouvelle voiture avec les options spécifiées
     * 
     * @param {string} brand Marque
     * @param {string} model Modèle
     * @param {string} colour Couleur
     * @param {number} nbDoors Nombre de portes
     * @param {number} cc Cylindrée en cm3
     * @param {number} hp Puissance en chevaux
     */
    constructor(brand, model, colour, nbDoors, cc, hp){
        this.brand      = brand;
        this.model      = model
        this.colour     = colour;
        this.nbDoors    = nbDoors;
        this.cc         = cc;
        this.hp         = hp;
    }

    /**
     * Affiche la fiche technque de la voiture dans le terminal
     */
    print(){
        console.log(AC.BG_BLUE + 'Je suis une voiture' + AC.RESET );
        console.log('De marque :' + AC.YELLOW + ' ' + this.brand + AC.RESET);
        console.log('De modèle :' + AC.YELLOW + ' ' + this.model + ' (' + this.nbDoors + ' portes)'+ AC.RESET);
        console.log('De couleur :' + AC.YELLOW + ' ' + this.colour + AC.RESET);
        console.log('Avec motorisation de ' + AC.YELLOW + this.cc + ' cm3'+ AC.RESET + ' de ' +  AC.YELLOW + this.hp + ' ch' + AC.RESET);
    }
}