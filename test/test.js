let cell = document.getElementsByClassName('box');

let a;
for(i=0;i<cell.length;i++){
    cell[i].addEventListener('click', strike);
    cell[i].textContent = 'A';
    
}

function strike(e){
    a = e.target.id;
    console.log(a);
    let strikeCell = document.getElementById(a);
    let strikepara = document.createElement('p');
    strikepara.className = 'strike';
    strikeCell.appendChild(strikepara);
    strikepara.innerHTML ="|"
    
}