let arr = ["MI", "CSK", "LSG", "RCB", "DC", "RR", "KKR", "SRH"];
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let team = Math.floor(Math.random() * arr.length);
    let winner = arr[team];
    h2.innerText = winner;
})