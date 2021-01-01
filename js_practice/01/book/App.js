/**
 * This is a file to practice the concept of class in JS
 */

 // Can use function to create a class
//  function Book(title, author, ISBN, numCopies){
//      this.title = title;
//      this.author = author;
//      this.ISBN = ISBN;
//      this.numCopies = numCopies;
//  }

//  ///using prototype so that each instance didn't need to create new function
//  Book.prototype.getAvailability = function(){
//         if(this.numCopies === 0){
//             return "Out of Stock";
//         }else if(this.numCopies < 10){
//             return "Low Stock";
//         }
//         return "In Stock";
//     }

// Book.prototype.sell=function(numCopiesSold){
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStock){
//     this.numCopies += numCopiesStock;
// }

// create class using class keyword
class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get availability(){
        return this.getAvailability();
    }
    getAvailability(){
        if(this.numCopies === 0){
            return "Out of Stock";
        }else if(this.numCopies < 10){
            return "Low Stock";
        }
        return "In Stock";
    }

    sell(numCopiesSold){
            this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestock){
        this.numCopies += numCopiesRestock;
}
}

const HungerGame = new Book("Henger of Game", "Suzanne Collin", 1198567, 5);
console.log("Availability of book: " + HungerGame.getAvailability());
HungerGame.restock(10);
console.log("Availability of book: " + HungerGame.getAvailability());
HungerGame.sell(15);
console.log("Availability of book: " + HungerGame.getAvailability());
