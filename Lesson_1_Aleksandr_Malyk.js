function isOrderable(arr) {
    var badCountL = 0;
    var badCountR = 0;
    var lastIndex = arr.length - 1;

    arr.reduce(function(max, current, index) {
        if (index == 0) {
            return current;
        }
        if (current <= max) {
            badCountL++;
        }
        return Math.max(max, current);
    }, 0);

    arr.reduceRight(function(min, current, index) {
        if (index == lastIndex) {
            return current;
        }
        if (current >= min) {
            badCountR++;
        }
        return Math.min(min, current);
    }, 0);

    var badCountReal = Math.min(badCountL, badCountR);

    return badCountReal <= 1;
}