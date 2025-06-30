function sortByLength (array) {
    
    
    const sor = [...array].sort((a, b) => a.length - b.length);
    
    return sor
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))