const inputText = document.getElementById('todo-text');
const button = document.querySelector('.btn-primary');

const posts = document.querySelector('#posts');



let data = {};
function captureData() {
  data["text"] = inputText.value;
  console.log(data);

  displayData();
}

function displayData() {
  posts.innerHTML += ` 
      <div>
        <p>${data.text}</p>
        <span class="options">
          <i onclick="editData(this)" class="fas fa-edit"></i>
          <i onclick="deleteData(this)" class="fas fa-trash-alt"></i>
          <i onclick="doneTask(this)" class="fa-solid fa-check"></i>
        </span>
      </div>
      `;
  inputText.value = "";


}

let deleteData=(e)=>{
  e.parentElement.parentElement.remove();
}

let editData=(e)=>{

  inputText.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

  
}

let doneTask=(e)=>{
  e.parentElement.parentElement.style.backgroundColor="teal";
    e.parentElement.parentElement.style.color="white";
}


