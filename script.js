// your JS code here. If required.

const output = document.getElementById("output");

function createPromise() {
    const time = Math.random() * 2 + 1;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time * 1000);
    });
}

const start = performance.now();

Promise.all([
    createPromise(),
    createPromise(),
    createPromise()
]).then((result) => {

    output.innerHTML = "";

    result.forEach((time, index) => {
        output.innerHTML += `
            <tr>
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            </tr>
        `;
    });

    const total = (performance.now() - start) / 1000;

    output.innerHTML += `
        <tr>
            <td>Total</td>
            <td>${total.toFixed(3)}</td>
        </tr>
    `;
});