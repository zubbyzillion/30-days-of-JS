const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Listens for click events on the fill className attribute
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Listens for click events on the empty className attribute
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Initialize the dragStart event
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);   
}

function dragEnd() {
    this.className = 'fill';
}

// Prevents the default of the draggable element from going back to its original position when dragStart is called
function dragOver(e) {
    e.preventDefault();
}

// Prevents the default of the draggable element from going back to its original position when dragStart is called and when being hovered on
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

// Appends the fill class to the empty class being selected to be dropped into
function dragDrop() {
    this.className = 'empty';
    this.append(fill)
}
