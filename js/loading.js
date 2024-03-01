loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 40)
blurring()

function blurring()
{
    load++


    if (load > 99)
    {
        clearInterval(int)
    }
    blur = 30-(load/100)*29
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100
    bg.style.filter = `blur(${blur}px)`
}
