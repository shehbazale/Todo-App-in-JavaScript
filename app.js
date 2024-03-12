
const inputValue = document.querySelector('#todo');
const listItem = document.querySelector('ul');
const taskCount= document.querySelector('.taskcount');

 const todoItems = [];
//  render todo function
function renderTodo(){
    listItem.innerHTML= ''
    for (let i = 0; i < todoItems.length; i++){
        listItem.innerHTML +=(`<li> <div class='list-btn-div'>
        <div>${todoItems[i]}</div>
        <div class='delete-edit-btn'>
        <button id='btnDelete' onclick='deleteTask(${i})'>Delete </button> |
        <button id='btnEdit' onclick ='editTask(${i})'>Edit </button></div>
        </div></li>`)
    }
    taskCount.innerHTML=(`${todoItems.length}`);
}
//  Add task in list
 function addTask(){ 
    if(inputValue.value.trim().length<1){
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

var icon = document.querySelector('#moon');

function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
document.body.classList.toggle('dark-mode');
if(document.body.classList.contains('dark-mode')){
    icon.src = "./image/sun.png"
}
else{
    icon.src = "./image/moon.png"
}
   
}
