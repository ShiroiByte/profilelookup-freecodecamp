/*
 *
 * @ Author: Marin Pontoni
 * @ Create Time: 2022-07-20 13:27:58
 */

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

  // Check if the name exists

  let checkup = contacts.filter((obj) => {
    if (obj.firstName === name) {
      return obj.firstName;
    }
  });
  let exists = checkup.length;
  
  // if it exist find the index of an object that the name belongs to

  if (exists === 1) {
    const index = contacts.findIndex((object) => {
      return object.firstName === name;
    });

  // search the index of the requested object

    let hasProp = contacts[index].hasOwnProperty(prop);

  // check for false properties 

    if (hasProp === false) {
      return "No such property";
    } else {
      return contacts[index][prop];
    }

  //check for false names

  } else {
    return "No such contact";
  }
}

lookUpProfile("Akira", "likes");
