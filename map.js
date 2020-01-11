const user = {
  name: "myname",
  lname: "mylastname",
  echo: function() {
    console.log("hiiii");
  },
  greet: function() {
    this.echo();
    console.log(`hello ${this.name} ${this.lname}`);
  }
};

const user2 = {
  name: "paiboon",
  lname: "aun",
  echo: function() {
    console.log("hooooooooo");
  }
};

user.greet();

const greetfunc = user.greet.bind(user2);

greetfunc();
