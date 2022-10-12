// v4
// Criar um menu NO TERMINAL com as seguintes opcoes:
// 1. Create
// 2. Read:All
// 3. Read:One
// 4. Delete
// 5. Update
// Os nome acima sao apenas exemplos.
// Criar funcionalidade capaz de pegar 1 numero digitado do teclado
// Caso o numero digitado no teclado seja o numero da opcao ele deve imprimir,
// "Your option selected is X.", X deve representar a opcao selecionada.
// Caso seja selecionado uma opcao nao existente deve imprimir,
// "Your option selected don't exist."
// Implementar funcionalidade de fechar menu, quando digitar Z ou z.
// Recursos utilizados: require, dependencie, let, while, switch
// **************************************************

const answer = require("prompt-sync")({ sigint: true });

const options = ["Create", "Read:All", "Read:One", "Update", "Delete"];

console.log("*** Choice one option ***");
console.table(options);
console.log("**************************");

let selectOption = answer("Select one Option by Number: ") 
switch (selectOption) {
    case ("Create", "0"):
      console.log("Your option selected is Create");
      break;
    case ("Read:All", "1"):
      console.log("Your option selected is Read:All");
      break;
    case ("Read:One", "2"):
      console.log("Your option selected is Read:One");
      break;
    case ("Update", "3"):
      console.log("Your option selected is Update");
      break;
    case ("Delete", "4"):
      console.log("Your option selected is Delete");
      break;
    default:
      console.log("Your option selected don't exist.");
  }