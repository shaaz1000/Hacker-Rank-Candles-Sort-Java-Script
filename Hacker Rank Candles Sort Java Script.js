function birthdayCakeCandles(candles) {

    let totalCount = 0
    let sortedcandles = candles.sort((a,b)=>{
      return b - a
    })
    
    for(let i = 0 ; i<sortedcandles.length;i++){
      if(sortedcandles[i]==sortedcandles[0]){
        totalCount ++
      }
    }
    return totalCount
}

console.log(birthdayCakeCandles([3,3,1,2,1))