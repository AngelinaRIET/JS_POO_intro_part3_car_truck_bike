// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./ANSIColours.js';

let AC = new ANSIColours();


export default class Truck{

    constructor(marque, modele, couleur, motorCm, motorCh, ptac, ptra){
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.motorCm = motorCm;
        this.MotorCh = motorCh;
        this.ptac  = ptac;
        this.ptra = ptra;
    }

    /**
     * Affiche la fiche technque de la voiture dans le terminal
     */
    print(){
        console.log(AC.BG_BLUE + 'Je suis un camion' + AC.RESET );
        console.log('De marque :' + AC.YELLOW + ' ' + this.marque + AC.RESET);
        console.log('De modèle :' + AC.YELLOW + ' ' + this.modele + AC.RESET);
        console.log('De couleur :' + AC.YELLOW + ' ' + this.couleur + AC.RESET);
        console.log('Avec une motorisation de :' + AC.YELLOW + ' ' + this.motorCm + AC.RESET + ' de '+ AC.YELLOW + ' ' + this.MotorCh + AC.RESET);
        console.log('Mon PTAC est de :' + AC.YELLOW + ' ' + this.ptac + AC.RESET);
        console.log('Mon PTRA de :' + AC.YELLOW + ' ' + this.ptra + AC.RESET);
    }
}


