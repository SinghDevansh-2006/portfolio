function showNumbers(){

    let numbers = [10, 25, 55, 60, 42, 90, 100];

    let result = numbers.filter(number => number > 50);

    document.getElementById("output").innerHTML =
        result.join(", ");

}