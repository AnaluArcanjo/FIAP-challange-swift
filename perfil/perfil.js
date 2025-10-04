
const docElement = document.documentElement;
const scrollBolha = document.querySelector('.scrollBolha')

const handleScroll = () => {
    const scrollTotal = docElement.scrollHeight - docElement.clientHeight;

    (docElement.scrollTop / scrollTotal) > 0.1
    ? scrollBolha.classList.add('showBolha')
    : scrollBolha.classList.remove('showBolha');
}

document.addEventListener("scroll", handleScroll);