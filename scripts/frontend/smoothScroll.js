const cursor = document.querySelector('.cursor');
const hoverables = document.querySelectorAll('.hoverable');
const arr = [...hoverables];

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

arr.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        cursor.classList.add('hovering');
    })

    item.addEventListener('mouseout', ()=>{
        cursor.classList.remove('hovering');
    })
})