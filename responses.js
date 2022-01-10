function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "salut") {
        return "Salutareee!";
    } else if (input == "pa") {
        return "O sa astept sa te intorci!";
    } else if (input == "Ce e un sistem neuromorf?")
    {
        return "Un computer neuromorf este o mașină care cuprinde multe procesoare simple / structuri de memorie (de exemplu, neurons & synapses) care comunică folosind mesaje simple (spikes).";
    } else if (input == "Ce e un computer neuromorf?")
    {
        return "Un computer neuromorf este o mașină care cuprinde multe procesoare simple / structuri de memorie (de exemplu, neurons & synapses) care comunică folosind mesaje simple (spikes).";
    } 
    else if (input == "cum te numesti?") {
        return "Sunt un chatbox, nu am un nume :)";
    } else if (input == "ce e un spike?") {
        return "Cel mai simplu mesaj temporal posibil.";
    } else if (input == "de ce nu avem un sistem neuromorf deja?") {
        return "Pentru ca neurostiinta este de prea putin ajutor intrucat creierul uman este foarte complex.";
    } else if (input == "ce e neurostiinta?") {
        return "Neuroștiința este studiul științific al sistemului nervos. Este o știință multidisciplinară care combină fiziologie, anatomie, biologie moleculară, biologie de dezvoltare, citologie, știința calculatoarelor și modelarea matematică pentru a înțelege proprietățile fundamentale și emergente ale neuronilor și a circuitelor";
    } 
    else if (input == "tu esti o inteligenta artificiala?") {
        return "Tu ce crezi?";
    } else if (input == "Georgiana Marunt e mama mea!") {
        return "Ba nu, e mama mea, nu mai minti";
    } else if (input == "nu") {
        return "de ce?";
    }
    else {
        return "Nu sunt inca antrenat pentru asta!";
    }
}