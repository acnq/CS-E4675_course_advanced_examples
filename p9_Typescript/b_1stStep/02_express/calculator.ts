export type Operation = 'multiply' | 'add' | 'divide';
type Result =  number;

export const calculator = (a: number, b: number, op: Operation) : Result => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error("Can't divide by 0!");
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide');
  }
};

try {
  console.log(calculator(1, 5, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'sth went wrong';
  if (error instanceof Error) {
    errorMessage += 'Error: ' + errorMessage;
  }
  console.log(errorMessage);
}


// calculator(1, 2, 'yolo')
// multiplicator('how about this', 4, 'Multiplied number 2 and 4, the result is:');