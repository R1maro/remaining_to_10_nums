function randomInRange(from, to) {
    let r = Math.random();
    return Math.floor(r * (to - from) + from);
};
let x = '';
for (let i = 1; i < 11; i++) {
    x += '<tr>';
    for (let j = 1; j < 21; j++) {
        x += '<td>' + randomInRange(0, 100) + '</td>';
    }
    x += '</tr>';
}
document.querySelector("#tb").innerHTML += x;

let tds = document.querySelectorAll("td");

for (let td of tds) {
    td.addEventListener('click', function () {
        let actives = document.querySelectorAll('td.active');
        if (actives.length == 3) {
            for (let acts of actives) {
                acts.classList.remove('active')
            }
        }else if (actives.length == 2){
            let sum = 0;
            for (let acts of actives){
                sum += parseInt(acts.innerHTML);
                acts.innerHTML = '-';
            }
            sum += parseInt(this.innerHTML);
            this.innerHTML = '-';
            document.querySelector('#cl').innerHTML = '(%)-10 Nums =';
            for (let i=1; i < 10; i++){
                if ((sum % i)== 0){
                    document.querySelector('#cl').innerHTML += i + ',';
                }
            }
        }

        td.classList.add('active');
    })
};