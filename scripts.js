
const nos3Link = document.getElementById('nos3-link');
console.log(`nos3link: ${nos3Link}`);
nos3Link.addEventListener('click', (e) => {
    console.log("THIS IS WORKING");
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'block';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('tutorials').style.display = 'none';
});


const cfsLink = document.getElementById('cfs-link');
cfsLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('cFS').style.display = 'block';
    document.getElementById('tutorials').style.display = 'none';
});


const tutorialLink = document.getElementById('tutorials-link');
tutorialLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('tutorials').style.display = 'block';
});

const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('tutorials').style.display = 'none';
});