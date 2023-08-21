function commonTwo(a, b){
   let count = 0;
    let lastChecked = null;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== lastChecked) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    count++;
                    lastChecked = a[i];
                    break;
                }
            }
        }
    }

    return count;
}