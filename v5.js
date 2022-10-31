const answer = require("prompt-sync")({ sigint: true });

const contacts = [
  {
    id: "1",
    nameUser: "User",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
];

const endApp = "x";

const statement = "statament";

console.log("-----------------------------");
console.log("    SELECT ONE OPTION");
console.log("  1 -     CREATE");
console.log("  2 -     READ ONE");
console.log("  3 -     READ ALL");
console.log("  4 -     UPDATE");
console.log("  5 -     DELETE");
console.log("-----------------------------");

const newUser = (newUser) => {
  contacts.push(newUser);
};

const selectOne = (index) => {
  const contactReceived = contacts[index];
  console.log("");
  console.log(`ID: ${contactReceived.id}`);
  console.log(`Name: ${contactReceived.nameUser}`);
  console.log(`Email: ${contactReceived.email}`);
  console.log(`Tel: ${contactReceived.tel}`);
  console.log("");
};

const listIds = () => {
  console.table(contacts);
};

const updateId = (index, attribute, value) => {
  contacts[index][attribute] = value;
  console.table(contacts);
};

const removeContact = (index) => {
  contacts.splice(index, 1);
  console.table(contacts)
};

let selectedOption = "";

while (selectedOption !== "x") {
  switch (selectedOption) {
    case "1":
      const id = answer("Id: ");
      const nameUser = answer("Name: ");
      const email = answer("E-mail: ");
      const tel = answer("Tel: ");
      newUser({
        id: id,
        nameUser: nameUser,
        email: email,
        tel: tel,
      });

      break;

    case "2":
      const one = answer("Selec user by index: ");
      selectOne(one);
      break;

    case "3":
      listIds();
      break;

    case "4":
      const indexInput = answer("Type the index do you want change:  ");
      const attributeInput = answer(
        "Type the key do you want change(id - nameUser - email - tel): "
      );
      const valueInput = answer("The value do you want change: ");
      updateId(indexInput, attributeInput, valueInput);
      break;

    case "5":
      const deleteId = answer("What id do you want delete by id: ");
      removeContact(deleteId);
      break;

    default:
      if (selectedOption !== "") {
        console.log("Your option selected don't exist.");
      }

      break;
  }
  selectedOption = answer("Select Your Option : ").toLowerCase();
}
