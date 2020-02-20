// setTimeout(() => {
//     console.log('Two seconds are up');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter(name => {
//     return name.length <= 4;
// });

// const geocode = (adress, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         };
//         callback(data);
//     }, 2000);
// }

// geocode('Philadelphia', (data) => {
//     console.log(data);
// });


const add = (n1, n2, callback) => {
    setTimeout(() => {
        const sum = n1 + n2;
        callback(sum);
    }, 2000);
};

add(1,4, sum => {
    console.log(sum);
});
