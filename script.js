function firstWord(s) {
  // your code here
	 if (s ==='') {
          return s
        }
	 let input_split= s.split(" ");
        return input_split[0]
}

// Do not change the code below

  const s = prompt("Enter String:")
alert(firstWord(s))
