const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      //Arrange
      const dayCare = new DayCare();

      //Assert
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    //Positive test
    it("should add a child to the 'children' array", () => {
      //Arrange
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      //Act
      dayCare.addChild(child);

      //Assert
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    //Negative test
    it("should not add a child over the 'ageLimit'", () => {
      //Arrange
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      //Act
      dayCare.addChild(child);

      //Assert
      expect(dayCare.children.length).toEqual(0);
    });

    //Negative test
    it("should not add a child if already at capacity", () => {
      //Arrange
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      //Act
      dayCare.addChild(child);

      //Assert
      expect(dayCare.children.length).toEqual(3);
    });

    //Exception test
    it("should throw an error if not provided a Child object as an argument", () => {
      //Arrange
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      //Assert
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    //Positive test
    it("should remove the first child found with a given name from 'children' and return it", () => {
      //Arrange
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      //Act
      const removed = dayCare.pickupChild(child2.name);

      //Assert lots of things
      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    //Negative test
    it("should return undefined and remove no children if child is not in 'children'", () => {
      //Arrange
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];
      
      //Act
      const removed = dayCare.pickupChild("Fred");

      //Assert
      expect(typeof removed).toEqual("undefined");
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
