function SeriesSum(n) {
    if (n == 0){
        return "0.00"
    }
    
    let array = []
    
    for(i=1; i<=n; i++){
        array.push((1/(2*i+(i-2))) )
        
    }
    return array.reduce((num1, num2)=> num1+num2).toFixed(2)

}
