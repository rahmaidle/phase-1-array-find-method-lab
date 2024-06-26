// code your solution here
// index.js
// index.js

function superbowlWin(record) {
    const win = record.find(function(game) {
      return game.result === 'W';
    });
  
    return win? win.year : undefined;
  }
  
  module.exports = superbowlWin;