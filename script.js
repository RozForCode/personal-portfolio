function returnfunction() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      // let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      }
      z();
    }
    a = 999;
    y();
  }
  return x;
}
let a = returnfunction();
a();