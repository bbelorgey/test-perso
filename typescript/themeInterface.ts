interface OptionsStruct {
  autoplay: boolean
  x: number
  sucess: (data:string)=>void
}

class DemoInterface {

  private options:OptionsStruct;

  constructor (options: OptionsStruct) {
    this.options = options;
  }
}

let demointerface = new DemoInterface({
  autoplay: true,
  x:2,
  sucess: function(data) {
    
  }
});