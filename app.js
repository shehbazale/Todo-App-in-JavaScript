
const inputValue = document.querySelector('#todo');
const listItem = document.querySelector('ul');
const taskCount= document.querySelector('.taskcount');

 const todoItems = [];
//  render todo function
function renderTodo(){
    listItem.innerHTML= ''
    for (let i = 0; i < todoItems.length; i++){
        listItem.innerHTML +=(`<div class='list-btn-div'>
        <div><li>${todoItems[i]}</li></div>
        <div class='delete-edit-btn'>
        <button id='btnDelete' onclick='deleteTask(${i})'>Delete </button> |
        <button id='btnEdit' onclick ='editTask(${i})'>Edit </button></div>
        </div>`)
    }
    taskCount.innerHTML=(`${todoItems.length}`);
}
//  Add task in list
 function addTask(){ 
    if(inputValue.value===''){
        alert('Please Enter Todo Task')
    }
    else{
     todoItems.push(inputValue.value);
     inputValue.value = '';
    // const input = inputValue.value;    
    // console.log(todoItems)
    renderTodo()
    }
   
}
// Delete function 
function deleteTask(index){
    const done = confirm('Are you sure!');
    if (done){
todoItems.splice(index, 1);
renderTodo();
}
}
// edit function
function editTask(index){
    const editText = prompt('Edit Task', todoItems[index])
    if(editText==''){

        prompt(`Write Someting`)
    
    }
    else{
        todoItems.splice(index, 1, editText)
        renderTodo();
}
}
// clear all function
function clearAll(){
    if(todoItems.length===0){
               alert('No task to Delete')
    
            }
    else{
            const done = confirm('Are you sure!');
         if (done)
         {
             todoItems.splice(0,todoItems.length);
             renderTodo()

         }
    }
}

alert(2-4)