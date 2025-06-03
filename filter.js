function countSheeps(sheep) {
    return sheep.filter(sheep => sheep === true).length
     }
   console.log(countSheeps([true,  true,  true,  false,
     true,  true,  true,  true ,
     true,  false, true,  false,
     true,  false, false, true ,
     true,  true,  true,  true ,
     false, false, true,  true]))