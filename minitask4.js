const arr = [1, 2, "halo", [1, 'hai'], {}, true, false];
const obj = {
    "number": 0,
    "string": 0,
    "boolean": 0,
    "object": 0,
    "array": 0
}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
        obj["array"]++
    } else if (element instanceof Object) {
        obj["object"]++
    } else {
        obj[typeof element]++
    }
}

console.log(obj);
