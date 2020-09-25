function loop(start, test, update, body) {
    for (let value=start; test(value); value=update(value) ) {
        body(value);
    }
}
loop(4, num => num<10, num => num+1, console.log);