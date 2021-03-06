'use strict';

class Theatre{
  findBlocking(theatre, row, seat){
    if(typeof theatre !== 'object'){
      throw new TypeError('theatre must be an array');
    }
    if(typeof row !== 'number' || typeof seat !== 'number'){
      throw new TypeError('row and seat must be integers');
    }
    if(row < 0 || seat < 0){
      throw new TypeError('row and seat must be positive numbers');
    }

    let blocking = 0;
    let column = [];
    for(let i = 0; i < theatre.length; i++){
      column.push(theatre[i][seat]);
    }
    for(let i = 0; i < column.length; i++){
      column[i] = this._convertHeightToInches(column[i]);
    }
    for(let i = row + 1; i < column.length; i++){
      if(column[row] > column[i]){
        blocking++;
      }
    }
    return blocking;
  }

  _convertHeightToInches(person){
    let height = person.split(' ');
    let heightInInches;
    if(height.length === 4){
      heightInInches = (parseInt(height[0]) * 12) + parseInt(height[2]);
    }else if(height.length === 2){
      heightInInches = parseInt(height[0]);
    }
    return heightInInches;
  }
}

module.exports = Theatre;
