var getUl = document.getElementById('ul');
let send = document.querySelector('#send');

send.addEventListener('click', () => {
    var a = document.getElementById('inp');
    var li = document.createElement('li');
    li.setAttribute('class', 'ttt');
    var litext = document.createTextNode(a.value);

    if (a.value === '') {
        alert('Please Write');
        return; // Return to exit the function if the value is empty
    }

    li.appendChild(litext);
    getUl.appendChild(li);

    var span = document.createElement('span');
    span.setAttribute('class', 'span');
    li.appendChild(span);

    var deletebtn = document.createElement('button');
    var deletebtntext = document.createTextNode('Delete');
    deletebtn.appendChild(deletebtntext);
    span.appendChild(deletebtn);
    deletebtn.setAttribute('class', 'btn btn-danger aaa');
    deletebtn.addEventListener('click', function () {
        li.remove();
    });

    var editbtn = document.createElement('button');
    var editbtntext = document.createTextNode('Edit');
    editbtn.appendChild(editbtntext);
    span.appendChild(editbtn);
    editbtn.setAttribute('class', 'btn btn-warning aaa');
    editbtn.addEventListener('click', function () {
        editfunc(li);
    });

    a.value = '';
});

function editfunc(li) {
    var newValue = prompt('Enter value', li.firstChild.nodeValue.trim());
    if (newValue !== null) {
        li.firstChild.nodeValue = newValue;
    }
}
let deleteall =  document.querySelector('#deleteall')
deleteall.addEventListener('click',()=>{

    getUl.innerHTML = '';
})

