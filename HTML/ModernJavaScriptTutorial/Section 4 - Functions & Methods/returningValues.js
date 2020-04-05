// returning values

const calcArea = function(radius){
    return 3.14 * radius ** 2
}

const area = calcArea(5) // now the function will return a value
console.log(area)

const calcVol = function(area) {}
calcVol(area) // you can use values stored from other functions