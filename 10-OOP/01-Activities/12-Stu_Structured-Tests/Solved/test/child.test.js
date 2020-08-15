const Child = require("../child");

describe("Child", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create an object with a name and age if provided valid arguments", () => {
      //Arrange
      const child = new Child("Sarah", 3);

      //Assert
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    //Exception test
    it("should throw an error if provided no arguments", () => {
      //Arrange
      const cb = () => new Child();

      //Assert
      expect(cb).toThrow();
    });

    //Exception test
    it("should throw an error if not provided an age", () => {
      //Arrange
      const cb = () => new Child("Sarah");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      //Assert
      expect(cb).toThrowError(err);
    });

    //Exception test
    it("should throw an error if 'name' is not a string", () => {
      //Arrange
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      //Assert
      expect(cb).toThrowError(err);
    });

    //Exception test
    it("should throw an error if 'age' is not a number", () => {
      //Arrange
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      //Assert
      expect(cb).toThrowError(err);
    });

    //Exception test
    it("should throw an error if 'age' is less than 0", () => {
      //Arrange
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      //Assert
      expect(cb).toThrowError(err);
    });
  });
});
