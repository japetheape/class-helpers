// Write your tests here!
// Here is an example.


var Game = ClassHelpers.createClass({
  test: function() {
    return 'test';
  }
});

Tinytest.add('it should setup a class', function (test) {
  var gameInstance = new Game();
  test.equal(gameInstance.test(), 'test');
});



Tinytest.add('it should return classes when added to collection', function (test) {
  if(!Games)
    Games = new Mongo.Collection('games');
  ClassHelpers.attachClassToCollection(Game, Games);
  Games.insert({name: 'Tic tac toe'});
  var game = Games.findOne();
  test.equal(game.name, 'Tic tac toe')
  test.equal(game.test(), 'test')
});


Tinytest.add('it should add a method to Mongo.Collection', function (test) {
  if(!SeriousGames)
    SeriousGames = new Mongo.Collection('serious_games');
    SeriousGames.attachClass(Game);

    SeriousGames.insert({name: 'Tic tac toe'});
  var game = SeriousGames.findOne();
  test.equal(game.name, 'Tic tac toe')
  test.equal(game.test(), 'test')
});


Tinytest.add('it should still do the old transform when to Mongo.Collection', function (test) {
  if(!TransformedGames)
    TransformedGames = new Mongo.Collection('other_games', {
      transform: function(doc) {
        doc.oldTransformTest = function() {
          return 'exists';
        }
        return doc;
      }
    });
    TransformedGames.attachClass(Game);

  TransformedGames.insert({name: 'Tic tac toe'});
  var game = TransformedGames.findOne();
  test.equal(game.name, 'Tic tac toe')
  test.equal(game.test(), 'test')
  test.equal(game.oldTransformTest(), 'exists');
});
