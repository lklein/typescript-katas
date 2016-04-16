/// <reference path="./cell.ts" />

class GameOfLife{
  private static perfectCase: number = 3;
  
  static evaluate(environment: Array<Array<Cell>>, position: Array<number>){
    let [y, x] = position;
    let neighbours = 0,
        environmentWidth: number = environment[y].length,
        top: number = y - 1,
        left: number = x - 1,
        right: number = x + 1,
        bottom: number = y + 1,
        hasTop: boolean =  top >= 0,
        hasLeft: boolean = left >= 0,
        hasRight: boolean = right < environmentWidth,
        hasBottom: boolean = bottom < environment.length;
    
    if(hasTop){
      let topPortion: Array<Cell> = environment[top].slice(
          hasLeft ? left : x, 
          hasRight ? (right + 1) : x );
      neighbours += this.countNeighboursInRow(topPortion);
    }
    if(hasLeft && environment[y][left].alive){
      neighbours += 1;
    }
    if(hasRight && environment[y][right].alive){
      neighbours += 1;
    }
    if(hasBottom){
      let bottomPortion: Array<Cell> = environment[bottom].slice(
          hasLeft ? left : x, 
          hasRight ? (right + 1) : x );
      neighbours += this.countNeighboursInRow(bottomPortion);
    }
    
    return this.willBeAlive(neighbours);
  }
  
  static countNeighboursInRow = (row: Array<Cell>): number => {
    return row.reduce((n:number, c: Cell) => {
        return n + (c.alive ? 1 : 0);
      }, 0);
  }
  
  static willBeAlive = (neighbours: number): boolean => {
    return neighbours === GameOfLife.perfectCase;
  }
}