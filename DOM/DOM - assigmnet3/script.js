 let form = document.getElementById('form')

 form.addEventListener('submit',(event) =>
{
  event.preventDefault();

  let taskName = document.getElementById('task').value
  let priority = document.getElementById('priority').value

  let obj = {
    taskName,
    priority
  }

  let row = document.createElement('tr');

  let col1 = document.createElement('td');
  col1.innerText = obj.taskName;

  let col2 = document.createElement('td');
  col2.innerText = obj.priority;

  let col3 = document.createElement('td');
  col3.innerText = 'delete'

  row.append(col1,col2,col3);

  console.log(row)

  let tbody = document.querySelector('tbody');
  tbody.appendChild(row)
  console.log(tbody)

  col3.addEventListener('click',()=>
  {
    row.remove();
  })

  document.getElementById('task').value = ""
  document.getElementById('priority').value =""

})



  

  