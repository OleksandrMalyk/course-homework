function getTotalCost(arr) {
    const ERROR_MSG = "Некорректные данные";
    const h = arr.length;

    // проверка входных данных
    if (!h || h > 5) {
        return ERROR_MSG;
    }

    const w = arr[0].length;

    // проверка входных данных
    for (let i = 0; i < h; i++) {
        let len = arr[i].length;

        if (!len || len > 5
                 || len != w
                 || Math.max(...arr[i]) > 10
                 || Math.min(...arr[i]) < 0) {
            return ERROR_MSG;
        }
    }

    let sum = 0;

    // решение
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            let current = arr[y][x];
            if (current == 0) {
                break;
            }
            sum += current;
        }
    }

    return sum;
}