/// <reference path="../../../../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../code/cell.ts" />
/// <reference path="../code/main.ts" />

describe("Game of Life kata", () => {
  describe("Empty cell behaviour", () => {
    let fertile = new Cell(false),
        overpopulated = new Cell(false),
        infertile = new Cell(false),
        
        matrix: Array<Array<Cell>> = [
          [new Cell(true), new Cell(false), new Cell(true), infertile],
          [fertile,        new Cell(true),  overpopulated,  new Cell(true)],
          [new Cell(true), new Cell(false), new Cell(true), new Cell(false)],
        ];
    
    it("Must become alive if has 3 neighbours", () => {
      let result: boolean = GameOfLife.evaluate(matrix, [1, 0]),
          expected: boolean = true;
      
      expect(result).toBe(expected);
    });
    
    it("Must remain empty if has less than 3 neighbours", () => {
      let result: boolean = GameOfLife.evaluate(matrix, [0, 3]),
          expected: boolean = false;
      
      expect(result).toBe(expected);
    });
    
    it("Must remain empty if has more that 3 neighbours", () => {
      let result: boolean = GameOfLife.evaluate(matrix, [1, 2]),
          expected: boolean = false;
      
      expect(result).toBe(expected);
    });
  });
    
  describe("Some functions", () => {
    describe("Count neighbours in row function", () => {
      it("counts the number of alive cells in a row", () => {
        let expected: number = 2, 
            result: number = GameOfLife.countNeighboursInRow([new Cell(true), new Cell(false), new Cell(true)]);
            
        expect(result).toBe(expected);  
      });
    });
  });  
});
