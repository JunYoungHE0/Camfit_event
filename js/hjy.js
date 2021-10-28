let aside = document.getElementById('aside');

aside.style.display = "none";
document.addEventListener('scroll', function () {
    let currnetScrollValue = document.documentElement.scrollTop;
    // console.log('currentScrollValue is' + currnetScrollValue);

    if (currnetScrollValue >= 900) {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
});
function pops_close() {
    let pops = document.getElementById('hjy_pop');
    let popsbg = document.getElementById('popbg');
    pops.style.display = "none";
    popsbg.style.display = "none";
}