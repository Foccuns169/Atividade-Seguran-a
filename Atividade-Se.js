console.log(`
                                                  !_        
                                                  |*~=-.,   
                                                  |_,-'\`    
                                                  |         
                                                  |         
                                                 /^\\        
                   !_                           /   \\       
                   |*\`~-.,                     /,    \\      
                   |.-~^\`                     /#"     \\     
                   |                        _/##_   _  \\_   
              _   _|  _   _   _            [ ]_[ ]_[ ]_[ ]  
             [ ]_[ ]_[ ]_[ ]_[ ]            |_=_-=_ - =_|   
           !_ |_=_ =-_-_  = =_|           !_ |=_= -    |    
           |*\`--,_- _        |            |*\`~-.,= []  |    
           |.-'|=     []     |   !_       |_.-"\`_-     |    
           |   |_=- -        |   |*\`~-.,  |  |=_-      |    
          /^\\  |=_= -        |   |_,-~\`  /^\\ |_ - =[]  |    
      _  /   \\_|_=- _   _   _|  _|  _   /   \\|=_-      |    
     [ ]/,    \\[ ]_[ ]_[ ]_[ ]_[ ]_[ ]_/,    \\[ ]=-    |    
      |/#"     \\_=-___=__=__- =-_ -=_ /#"     \\| _ []  |    
     _/##_   _  \\_-_ =  _____       _/##_   _  \\_ -    |\\   
    [ ]_[ ]_[ ]_[ ]=_0~{_ _ _}~0   [ ]_[ ]_[ ]_[ ]=-   | \\  
    |=__-_=-_  =_|-=_ |  ,  |     |_=-___-_ =-__|_    |  \\ 
     | _- =-     |-_   | ((* |      |= _=       | -    |___\\
     |= -_=      |=  _ |  \`  |      |_-=_       |=_    |/+\\|
     | =_  -     |_ = _ \`-.-\`       | =_ = =    |=_-   ||+||
     |-_=- _     |=_   =            |=_= -_     |  =   ||+||
     |=_- /+\\    | -=               |_=- /+\\    |=_    |^^^|
     |=_ |+|+|   |= -  -_,--,_      |_= |+|+|   |  -_  |=  |
     |  -|+|+|   |-_=  / |  | \\     |=_ |+|+|   |-=_   |_-/ 
     |=_=|+|+|   | =_= | |  | |     |_- |+|+|   |_ =   |=/  
     | _ ^^^^^   |= -  | |  <&>     |=_=^^^^^   |_=-   |/   
     |=_ =       | =_-_| |  | |     |   =_      | -_   |    
     |_=-_       |=_=  | |  | |     |=_=        |=-    |    
`);

console.log("\n \n ATIVIDADE CRIPTOGRAFIA, CIFRA DE CESAR. \n \n Decidimos utilizar um deslocamento de 6 na dinâmica em sala. \n Ao Deslocar reescrevemos a palavra codificada de trás para frente \n \n");


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Opcao = "";
var Alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let Palavra = "";

rl.question("Digite a palavra que deseja encriptar ou descriptografar: \n (digite em Caps Lock e sem acentos) ", (Palavra) => {
    console.log("Palavra escolhida é ", Palavra);
    rl.question("Digite 1 para encriptar ou 2 para descriptografar:", (Opcao) => {
        if (Opcao == "1") {
            console.log("Você escolheu encriptar!");
        } else if (Opcao == "2") {
            console.log("Você escolheu descriptografar!");
        } else {
            console.log("Opção não encontrada!");
        }

        switch (Opcao) {
            case "1":

                var Codificado = "";
                for (var j = 0; j < Palavra.length; j++) {
                    for (var i = 0; i != Alfabeto.length; i++) {
                        if (Palavra[j] == Alfabeto[i]) {
                            if ((i + 6) < 26) {
                                Codificado += Alfabeto[i + 6];
                                break;
                            } else if ((i + 6) > 25) {
                                Codificado += Alfabeto[(i + 6) % 26];
                                break;
                            }
                        }
                    }
                }
                var Criptografia2 = "";
                for (var k = Codificado.length - 1; k >= 0; k--) {
                    Criptografia2 += Codificado[k];
                }
                console.log("A palavra Criptografada é ", Criptografia2);
                break;

            case "2":

                var Desinvertido = "";
                var Descripto = ""
                for (var l = Palavra.length - 1; l >= 0; l--) {
                    Desinvertido += Palavra[l];
                }
                for (var m = 0; m < Desinvertido.length; m++) {
                    for (var n = 0; n != Alfabeto.length; n++) {
                        if (Desinvertido[m] == Alfabeto[n]) {
                            if ((n - 6) >= 0) {
                                Descripto += Alfabeto[n - 6];
                                break;
                            } else if ((n - 6) < 0) {
                                Descripto += Alfabeto[((n - 6) + 26)];
                                break;
                            }
                        }
                    }
                }
                console.log("A palavra Descriptografada é ", Descripto);
                break;
        }
        rl.close();
    });
});
