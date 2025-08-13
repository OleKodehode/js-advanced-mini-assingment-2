/***************************************************
 * Extra assignment: Javascript classes
 ***************************************************

    Task 1: Create a Javascript class with two fields, two methods, and a constructor,.
                Class name: QuizTrackerBase
                Fields:
                  - correctGuesses – A number that tracks the number of correct answers
                  - incorrectGuesses – A number that tracks the number of incorrect answers
                 Methods:
                  - getCorrectPercentage() – Return the percentage of correctly answered questions,
                    as a number `x`, such that `0 <= x <= 1`.
                  - toString() – Return a JSON of correctGuesses and incorrectGuesses,
                    e.g. `{ "correctGuesses": 3, "incorrectGuesses": 5 }`, as a string.
                Constructor:
                  - Assign `0` to both of the fields, as in `this.value = 0;`

 **************************************************/

class QuizTrackerBase {
  correctGuesses;
  incorrectGuesses;
  #totalQuestions;
  constructor(correctGuesses = 0, incorrectGuesses = 0) {
    this.correctGuesses = correctGuesses;
    this.incorrectGuesses = incorrectGuesses;
    this.#totalQuestions = this.correctGuesses + this.incorrectGuesses;
  }

  getCorrectPercentage() {
    const percentCorrect = (this.correctGuesses / this.#totalQuestions).toFixed(
      2
    );
    return `Current percentage of correctly answered questions: ${percentCorrect} / ${
      percentCorrect * 100
    }%`;
  }

  toString() {
    return JSON.stringify({
      correctGuesses: this.correctGuesses,
      incorrectGusses: this.incorrectGuesses,
    });
  }
}

/***************************************************

    Task 2: Add a private field to the class
                Private fields are fields that are only accessible by the
                class that declared it.
                A public field is available in all contexts, while a "protected"-field 
                (not available in vanilla JS, but can be implemented manually, or you could just switch to Typescript 😆])
                is available to the declaring class, *and* to classes that are derived from it,
                i.e. children of the delaring class

                In order to declare a private field, we prefix it with a hashtag:
                `#myPrivateField`.

                Add a field called `#totalQuestions` to the declaration of the `QuizTrackerBase`-class, located above.

 **************************************************/

/***************************************************

    Task 3: Create a child of the `QuizTrackerBase`-class
                Derived classes, extended classes, child classes, or simply children, all refer to the same thing:
                Classes that inherit behaviour and members from another class.

                In order to create a child of another class, we simply define it as:
                `class ChildClass extends ParentClass { ... }`

                Name the child-class `MyQuizTracker`.

                Add a constructor, and in that constructor, call the function `super()`.
                This triggers the constructor-function of the parent-class, so be sure to pass any arguments,
                if any are relevant and present.

 **************************************************/

class MyQuizTracker extends QuizTrackerBase {
  constructor(correctGuesses, incorrectGuesses) {
    super(correctGuesses, incorrectGuesses);
  }

  getIncorrectPercentage() {
    const percentIncorrect = (
      this.incorrectGuesses /
      (this.correctGuesses + this.incorrectGuesses)
    ).toFixed(2);
    // needed a Math.round on the last part - Would sometimes produce numbers like 57.99999997. Might happen with the base class as well?
    return `Current percentage of incorrectly answered questions: ${percentIncorrect} / ${Math.round(
      percentIncorrect * 100
    )}%`;
  }
}

/***************************************************

    Task 4: Add a new method to `MyQuizTracker`
                Add a new method called `getIncorrectPercentage`, which return the percentage of
                incorrectly answered questions, as a number `x`, such that `0 <= x <= 1`.

 **************************************************/

/***************************************************

    Task 5: Create some sort of test functionality that checks the output of both the
                parent class and child class when the `toString()` and
                `getCorrectPercentage` methods are invoked.
                
                Use `console.log` for output.

 **************************************************/

const testObj = new QuizTrackerBase(5, 8);
const testChildObj = new MyQuizTracker(9, 10);

console.log(testObj);
console.log(testObj.toString());
console.log(testObj.getCorrectPercentage());

console.log(testChildObj);
console.log(testChildObj.toString());
console.log(testChildObj.getCorrectPercentage());
console.log(testChildObj.getIncorrectPercentage());
