
// MAPPING 
const buttons = document.querySelectorAll('.tab-bar button');
const contents = document.querySelectorAll('.content');

function showContent(id, clickedBtn) {

    // HIDE ALL CONTENT DIVS
    contents.forEach(content => content.style.display = 'none');
  
    // SHOW THE SELECTED CONTENT DIV
    document.getElementById(id).style.display = 'block';
  
    // REMOVE ACTIVE CLASS FROM ALL BUTTONS
    
    buttons.forEach(btn => btn.classList.remove('active-tab'));
  
    // ADD ACTIVE CLASS TO THE CLICKED BUTTON
    clickedBtn.classList.add('active-tab');
  }
