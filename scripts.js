
const nos3Link = document.getElementById('nos3-link');
nos3Link.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'block';
    document.getElementById('installation').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('demos').style.display = 'none';
    document.getElementById('other').style.display = 'none';
});

const installLink = document.getElementById('installation-link');
installLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('installation').style.display = 'block';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('demos').style.display = 'none';
    document.getElementById('other').style.display = 'none';
});

const cfsLink = document.getElementById('cfs-link');
cfsLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('installation').style.display = 'none';
    document.getElementById('cFS').style.display = 'block';
    document.getElementById('demos').style.display = 'none';
    document.getElementById('other').style.display = 'none';
});

const demoLink = document.getElementById('demos-link');
demoLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('installation').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('demos').style.display = 'block';
    document.getElementById('other').style.display = 'none';
});

const otherLink = document.getElementById('other-link');
otherLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('installation').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('demos').style.display = 'none';
    document.getElementById('other').style.display = 'block';
});

const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', (e) => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('nos3').style.display = 'none';
    document.getElementById('installation').style.display = 'none';
    document.getElementById('cFS').style.display = 'none';
    document.getElementById('demos').style.display = 'none';
    document.getElementById('other').style.display = 'none';
});