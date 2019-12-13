
export default function createCounter(n) {
    let count;

    return function() {
        count = (count === undefined) ? count = 0 : count +=n
        return count
    };
}
