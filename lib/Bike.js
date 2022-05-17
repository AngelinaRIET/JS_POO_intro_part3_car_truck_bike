
// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./ANSIColours.js';

let AC = new ANSIColours();


export default class Bike{

    constructor(marque, modele, couleur, motorCm, motorCh, transmission,hauteur_selle){
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.motorCm = motorCm;
        this.motorCh = motorCh;
        this.hauteur_selle = hauteur_selle;
        this.transmission  = transmission
    }

    /**
     * Affiche la fiche technque de la voiture dans le terminal
     */
    print(){
        console.log(AC.BG_BLUE + 'Je suis une moto' + AC.RESET );
        console.log('De marque :' + AC.YELLOW + ' ' + this.marque + AC.RESET);
        console.log('De modèle :' + AC.YELLOW + ' ' + this.modele + AC.RESET);
        console.log('De couleur :' + AC.YELLOW + ' ' + this.couleur + AC.RESET);
        console.log('Avec une motorisation de :' + AC.YELLOW + ' ' + this.motorCm + AC.RESET + ' de '+ AC.YELLOW + ' ' + this.motorCh + AC.RESET);
        console.log('Ma transmission se fait par :' + AC.YELLOW + ' ' + this.transmission + AC.RESET);
        console.log('Ma hauteur de selle est de :' + AC.YELLOW + ' ' + this.hauteur_selle + AC.RESET);
    }
}