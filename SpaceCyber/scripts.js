
const nos3Link = document.getElementById('nos3-link');
console.log(`nos3link: ${nos3Link}`);
nos3Link.addEventListener('click', (e) => {
    console.log("THIS IS WORKING");
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'block';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('tutorials').style.display = 'none';
});

// document.getElementById('cfs-link').addEventListener('click', function () {
//     document.getElementById('nos3').style.display = 'none';
//     document.getElementById('cFS').style.display = 'block';
//     document.getElementById('tutorials').style.display = 'none';
// });

// document.getElementById('tutorials-link').addEventListener('click', function () {
//     document.getElementById('nos3').style.display = 'none';
//     document.getElementById('cFS').style.display = 'none';
//     document.getElementById('tutorials').style.display = 'block';
// });