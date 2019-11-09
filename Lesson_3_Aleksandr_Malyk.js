function filterStrings(arr) {
    if (!arr.length) {
        return [];
    }
    let filteredArr = [];

    for (let i = 0, max = arr[0].length; i < arr.length; i++) {
        let current = arr[i];

        if (current.length > max) {            
            max = current.length;
            filteredArr = [current];
            
            continue;
        }
        if (current.length == max) {
            filteredArr.push(current);
        }
    }

    return filteredArr;
}