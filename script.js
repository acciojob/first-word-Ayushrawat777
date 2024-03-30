function firstWord(str) {
  let a=str.trim()
      let index = a.indexOf(" "); 
let res = a.substring(0, index !== -1 ? index : a.length);
	return res
}

// Do not change the code below

  const s = prompt("Enter String:");
alert(firstWord(s)) 
