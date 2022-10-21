const answer = require("prompt-sync")({ sigint: true });

const contacts = [];

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

const newUser = (x) => {
  contacts.push(x);
};

newUser({
  id: "1",
  nameUser: "User",
  email: "mail@mail.com",
  tel: "(11)1111-1111",
});

const selectOne = (index) => {
  console.log(contacts[index]);
};

const listIds = () => {
  console.log(contacts);
};

const updateId = (id, attribute, value) => {
  contacts[id][attribute] = value;
  console.log(contacts);
};

const removeContact = (index) => {
  contacts.splice(index, 1);
};

let selectedOption = "";

while (selectedOption !== "x") {
  switch (selectedOption) {
    case "1":
      "not done yet";
      break;

    case "2":
      "not done yet";
      break;

    case "3":
      listIds();
      break;

    case "4":
      "not done yet";
      break;

    case "5":
      "not done yet";
      break;

    default:
      if (selectedOption !== "") {
        console.log("Your option selected don't exist.");
      }

      break;
  }
  selectedOption = answer("Select Your Option : ").toLowerCase();
}
