// Raça, Classe, Subatributos

listRaca = document.getElementsByClassName('nav-input')[0];
listClasse = document.getElementsByClassName('nav-input')[1];

var ba = 0, forc = 0, des = 0;

// Raças
satbMov = document.getElementsByClassName('satb-mov')[0];

listRaca.addEventListener('change', function(){
    
    atbWrite(satbMov, "Raça: " + racas[listRaca.value] + "m");
    
}, false);

// Classes
satbPv = document.getElementsByClassName('satb-pv');
satbJp = document.getElementsByClassName('satb-jp');
atqBa = document.getElementsByClassName('atq-ba');

listClasse.addEventListener('change', function(){
    
    ba = classes[listClasse.value][1];
    
    atbWrite([atqBa[0], atqBa[1]], "+" + ba + " BA");
    atbWrite(satbPv[0], classes[listClasse.value][0] + " DV");
    atbWrite(satbJp[0], classes[listClasse.value][2] + " JP");
    
    ataques();
    
}, false);

// Ataques
atqT = document.getElementsByClassName('atq-t');

function ataques() {
    
    atbWrite(atqT[0], forc + ba);
    atbWrite(atqT[1], des + ba);
}

// Atributos
atb = document.getElementsByClassName('atb');
atbAj = document.getElementsByClassName('atb-aj');

// Força
atbFor = document.getElementsByClassName('atb-for')[0];

atb[0].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        val = atributos[this.value][1];
        
        atbWrite(atbAj[0], "Ajuste: " + val);
        atbWrite(atbFor, val + " FOR");
        
        forc = atributos[this.value][0];
        ataques();
        
    } else {
        
        atbWrite([atbAj[0], atbFor, atqT[0]]);
    }
    
}, false);

// Destreza
atbDes = document.getElementsByClassName('atb-des');

atb[1].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        atbWrite(atbAj[1], "Ajuste: " + atributos[this.value][1]);
        atbWrite([atbDes[0], atbDes[1]], atributos[this.value][1] + " DES");
        
        des = atributos[this.value][0];
        ataques();
        
    } else {
        
        atbWrite([atbAj[1], atbDes[0], atbDes[1], atqT[1]]);
    }
    
}, false);

// Constituição
atb[2].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        atbWrite(atbAj[2], "Ajuste: " + atributos[this.value][1]);
        atbWrite([satbPv[1], satbJp[2]], atributos[this.value][1] + " CON");
        atbWrite(satbPv[2], atributos[this.value][2] + " Ressusc.");
        
    } else {
        
        atbWrite([atbAj[2], satbPv[1], satbJp[2], satbPv[2]]);
    }
    
}, false);

// Inteligência
atb[3].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        val = "Idiomas: +" + atributos[this.value][3] + " | % Ap. Magia: " + atributos[this.value][4];
        atbWrite(atbAj[3], val);
        
    } else {
        
        atbWrite(atbAj[3]);
    }
    
}, false);

// Sabedoria
atb[4].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        val = atributos[this.value][1];
        
        atbWrite(atbAj[4], "Ajuste: " + val);
        atbWrite(satbJp[3], val + " SAB");
        
    } else {
        
        atbWrite([atbAj[4], satbJp[3]]);
    }
    
}, false);

// Carisma
atb[5].addEventListener('input', function(e){
    
    if(this.value > 0 && this.value < 30) {
        
        val = atributos[this.value];
        val = "Seguidores: " + val[5] + " | AI. Reação: " + val[6];
        
        atbWrite(atbAj[5], val);
        
    } else {
        
        atbWrite(atbAj[5]);
    }
    
}, false);

// Atualiza os Valores
function atbWrite ( obj, v ) {
    
    v = v != null ? v : '...';
    
    if(Array.isArray(obj)) {
        
        len = obj.length;
        
        for ( i=0; i < len; i++ ) obj[i].innerHTML = v;
        
    } else {
        
        obj.innerHTML = v;
    }
}