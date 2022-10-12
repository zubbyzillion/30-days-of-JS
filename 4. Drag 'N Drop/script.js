const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');





function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);   
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill)
}
