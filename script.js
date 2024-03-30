function firstWord(str) {
      let index = str.indexOf(" "); 
let res = str.substring(0, index !== -1 ? index : str.length);
	return res
}

// Do not change the code below

  const s = prompt("Enter String:");
alert(firstWord(s)) 
