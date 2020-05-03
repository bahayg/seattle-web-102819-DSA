// Bahay

function attendanceRecord(s) {
    const arr = s.split("")
    let countA = 0;
    let countL = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "A") {
            countA ++;
        }
        if (arr[i] === "L" && arr[i + 1] === "L" && arr[i + 2] === "L") {
            countL = true;
        }
    }
        if (countA > 1 || countL) {
            return false;
        } else {
            return true;
        }
}