function isSimilar(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    const bad1 = [];
    const bad2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            if (bad1.length == 2) {
                return false;
            }

            bad1.push(arr1[i]);
            bad2.push(arr2[i]);
        }
    }

    return bad1[0] === bad2[1]
        && bad1[1] === bad2[0];
}