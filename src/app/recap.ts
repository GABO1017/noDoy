const username: string = 'gabo1017';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3)

class Person{

  constructor(private age: number, public lastName: string){}
}

const gabo = new Person(20, 'Franco');
