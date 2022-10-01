function hour(val) {
    let hour= "";

    if (val < 12){
        hour = "lower than 12";
    }else {
        hour = "bigger than 12"
    }

    return hour;
}
console.log(hour(5));