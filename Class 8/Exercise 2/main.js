const asciiCapitalize = (string)=>{
    return string
            .split("")
            .map((letter)=>(letter.charCodeAt()%2==0)? letter.toUpperCase():letter.toLowerCase())
            .join("");
};

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
