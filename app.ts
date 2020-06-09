// Array generic
const numbers: number[] = [];
const arr: Array<number> = [];

// Generic types
const getNumber = (x: number) => x;
const getText = (x: string) => x;
const getArray = (x: Array<any>) => x;
// const value = getText('5'); /*?*/

type TypeFactory<T> = T;
type textType = TypeFactory<string>; /*?*/

const text: textType = 'Message';

// Generic functions
function getValue<T>(value: T): T {
  return value;
}

const username = 'Adam';
getValue(username);
getValue(5);

// Generic interfaces
interface Values<V, W> {
  val1: V,
  val2: W
}

function getValues<T, U>(arg1: T, arg2: U): Values<T, U> {
  return {
    val1: arg1,
    val2: arg2
  };
}

const values = getValues(2, 'text');

// Generic classes 
class List<T> {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list
  }
}

const list = new List<string>();
const ids = new List<number>();

list.addItem('Test');
ids.addItem(1234);
list.getList(); /*?*/