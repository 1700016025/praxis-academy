class User {
  constructor(name) {
    this.name = name;}
  sayHi() {
    alert(this.name);}
}
let user = new User("Dian Pertiwi");
user.sayHi();