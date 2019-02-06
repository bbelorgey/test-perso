class Demo {

  public element1:number;
  private element2:number;
  protected element3:number;

  private _element:string;


  constructor() {

    this.element1=2;
    this.element2=2;

  }

  set element (value:string) {
    this._element = value;
  }

  get element (): string {
    return this._element;
  }

  public demo() {
  }

  private demo1() {
  }

  static demo2() {
  }
}

class Demo2 extends Demo {

  public test () {

  }
}

let d = new Demo();
d.demo();

console.log(d.element);

console.log(Demo.demo2());

let d2 = new Demo2();

console.log(d2.test)