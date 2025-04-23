//var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER", a);
}

// for(let i=0; i< Array.length; i++){
//   const element = Array[i];
// }

// console.log(a);
//onsole.log(b);

function one(){
  const username = "harshit"

  function two(){
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);

  two();
}

//one();

if(true){
  const username="harshit";
  if(username === "harshit"){
    const website = " youtube";
    console.log(username, website);
  }
  //console.log(website);
}
//console.log(username);