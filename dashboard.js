function activateTab(index) {
    const allBtns = document.querySelectorAll('.btn');
    const contents = document.querySelectorAll('.content-box > div');


    allBtns.forEach((btn, i) => {
        btn.classList.remove('active1', 'active2', 'active3', 'active4', 'active5');
    });

    contents.forEach(div => div.classList.remove('show'));
    allBtns[index - 1].classList.add('active' + index);
    document.getElementById('content' + index).classList.add('show');
}