// sign-in 

let form = document.getElementById('signin');

form.addEventListener('submit',(e)=>
{
    e.preventDefault()
   let name = document.getElementById('signin-name').value;
//    console.log(name);
   
   let email = document.getElementById('signin-email').value;
//    console.log(email);

   let password = document.getElementById('signin-password').value;
//    console.log(password);
   
   let employee={
    name: name,
    email : email,
    password : password
   }
   console.log(employee);
   
})

let data = document.getElementById('signup');

data.addEventListener('submit', (e) =>
{
    e.preventDefault()

    let name1=document.getElementById('name').value;
    // console.log(name1)

    let email1 =document.getElementById('email').value;
    // console.log(email1)

    let country1=document.getElementById('country').value;
    // console.log(country1)

    let phone1 =document.getElementById('phone').value;
    // console.log(phone1)

    
    let pass1 =document.getElementById('password').value;
    // console.log(pass1)

    let employee1 ={
        name: name1,
        email : email1,
        country:country1,
        phone : phone1,
        password : pass1
       }
       console.log(employee1);
       
})