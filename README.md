# Class helpers
Tiny package to add class functionality to Meteor in general and to collections.

We wrapped the by the Meteor [recommended way](http://docs.meteor.com/#/full/mongo_collection) of creating classes and adding it to the transform options of Mongo.Collection, so we have a cleaner syntax.


## Installation
```
meteor add japetheape:class-helpers
```


## Example
In this example we make a simple class and attach it to a collection so every find returns an instance of this class.

### Define a class
Here we define a simple class.

```
var Game = ClassHelpers.createClass({
  test: function() {
    return 'test';
  }
});

var gameInstance = new Game();
gameInstance.test();
```


### Attach the class to a collection
```
Games = new Mongo.collection('game')
Games.attachClass(Game);

// fetch the first game
var game = Games.findOne();

game.test()
// -> 'test'
```


# Author
Written by: http://jaapvandermeer.com of http://ape55.com, contact us for Meteor projects!
