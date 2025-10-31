// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {

	const admins = utilisateurs.filter(user => user.estAdmin === true);

	return admins.map(user => user.nom);
}

const utilisateurs =[
	{ nom: "Alice", age: 25, estAdmin: true },
	{ nom: "Bob", age: 30, estAdmin: false },
	{ nom: "Charlie", age: 28, estAdmin: true },
];

console.log(whoIsAdmin(utilisateurs));


// 	if (!Array.isArray(users)) return [];

// 	return users
//         .filter(user => user.estAdmin === true)
//         .map(user => user.nom);
// }


// const users = [
//     { nom: "Alice", age: 25, estAdmin: true },
//     { nom: "Bob", age: 30, estAdmin: false },
//     { nom: "Charlie", age: 28, estAdmin: true }
// ];

// console.log(whoIsAdmin([
//     { nom: "Alice", age: 25, estAdmin: true },
//     { nom: "Bob", age: 30, estAdmin: false },
//     { nom: "Charlie", age: 28, estAdmin: true }
// ]));

// console.log(whoIsAdmin([]));
// console.log(whoIsAdmin([{ nom: "Bob", age: 30, estAdmin: false }]));
// console.log(whoIsAdmin([{ nom: "Alice", age: 30, estAdmin: true }]));


// Export pour les tests si nécessaire
module.exports = {
	whoIsAdmin,
};