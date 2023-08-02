// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolved')
//     }, 3000);
// })

// async function getData() {
//     let response = await promise;
//     console.log(response)
// }


// getData();

// getData().then(data => {
//     console.log(data);
// }).catch(data => {
//     console.log(data);
// })




let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

// Ex - 01 With Promise

let dell = {
    brand: 'Dell',
    storage: '512GB SSD',
    modal: 'Gaming'
}

let hp = {
    brand: 'HP',
    storage: '1TB HDD',
    modal: 'Inspiron'
}

let notAvail = {
    brand: 'Not Avaliable',
    status: 'Failed'
}

let dellAvaiable = true;
let hpAvailable = false;

let buyLaptop = new Promise((resolve, reject) => {
    if (dellAvaiable) {
        setTimeout(() => {
            resolve(dell);
        }, 3000);
    } else if (hpAvailable) {
        setTimeout(() => {
            resolve(hp);
        }, 3000);
    } else {
        setTimeout(() => {
            resolve(notAvail);
        }, 3000);
    }
})

function fetch1() {
    result1.innerText = 'Fetching Data...';

    buyLaptop.then(data => {
        result1.innerHTML = JSON.stringify(data);
    }).catch(data => {
        result1.innerHTML = JSON.stringify(data);
    })
}


// Ex - 02 With async await

async function fetch2() {
    result2.innerText = 'Fetching Data...';

    let data = await buyLaptop;
    result2.innerText = JSON.stringify(data);
}

// Ex - 03 With Fetch with Api

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json());

// function fetch3() {
//     result3.innerText = 'Fetching Data...';

//     //Promise 
//     buyLaptop2.then(data =>{
//         result3.innerText = JSON.stringify(data);
//     })
// }

async function fetch3(){
    result3.innerText = 'Fetching Data...';

    let data = await buyLaptop2;
    result3.innerText = JSON.stringify(data);
}