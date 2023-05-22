// target the input field
let userInput = document.querySelector('.input-field')

let addBtn = document.querySelector('.add-btn');
let listContainer = document.querySelector('.list-container')

addBtn.addEventListener('click', (event)=>{
         if(userInput.value === ''){
              alert("pls enter your task")
         }else{
            // create li
            let li = document.createElement('li');
            li.innerHTML = userInput.value;
             listContainer.appendChild(li);

            //  create the trash span
            let trash_span = document.createElement('span');
             li.appendChild(trash_span)
            //  create the delete icon
            let deleteImg = document.createElement('img');
            deleteImg.src = "./images/trash.png";
            trash_span.appendChild(deleteImg)

            saveTask()

         }

         userInput.value = ''
})


listContainer.addEventListener('click', (event)=>{
      if(event.target.tagName === 'LI'){
          event.target.classList.toggle('checked')
          saveTask()
      }else if(event.target.tagName === 'SPAN'){
           event.target.parentElement.remove()
           saveTask()
      }

    
})


function saveTask(){
       localStorage.setItem('todos', listContainer.innerHTML)
}

function retrieveTask(){
    listContainer.innerHTML = localStorage.getItem('todos')
}

retrieveTask()