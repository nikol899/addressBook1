"use strict";

class Contact {
    constructor(name, email, phone, relation) { //properties
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Susan", "susan@gmail.com", "248-234-4321", "Friend"),
            new Contact("Tom", "tom@gmail.com", "248-789-0000", "Grandpa"),
        ]; // array of Contact instance
    }
    add(info) { //makes a new contact instance add to addressbook
       
        this.contacts.push(info);
    }

    deleteAt(index) {       //removes the contact at the given array index
        this.contacts.pop(index);
    }
    print() { // logs contacts to the console
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
}
const book = new AddressBook(); // created new instance
console.log(book);
book.add(new Contact("Barbara", "b@yahoo.com", "111-222-3333", "Grandma"));
book.deleteAt("Susan");
book.print();

let choice = prompt("Would you like to add, delete,print or quit?");
while(true){
    if(choice === "add"){
        let name = prompt("Name");
        let email= prompt("Email");
        let phone = prompt("Phone");
        let relation =prompt("Relation");
        book.add(new Contact(name, email,phone,relation));
    }

    }




// do an instance put in the array in the address book



