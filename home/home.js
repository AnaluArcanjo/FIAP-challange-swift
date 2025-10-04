const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })

} )

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element))

const docElement = document.documentElement;
const scrollBolha = document.querySelector('.scrollBolha')

const handleScroll = () => {
    const scrollTotal = docElement.scrollHeight - docElement.clientHeight;

    (docElement.scrollTop / scrollTotal) > 0.2
    ? scrollBolha.classList.add('showBolha')
    : scrollBolha.classList.remove('showBolha');
}

document.addEventListener("scroll", handleScroll);