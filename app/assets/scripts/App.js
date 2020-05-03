// import "../styles/styles.css";
import "../styles/styles.scss";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
// import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept();
}

// let revealOnScroll = new RevealOnScroll();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 70);

let mobileMenu = new MobileMenu();

// class Adult extends Person {
//   paytaxes() {
//     console.log(this.name + " no tax balance");
//   }
// }

// var john = new Person("John Doe", "green");
// john.greet();

// var jane = new Adult("Jane Doe", "pink");
// jane.greet();
// jane.paytaxes();
