// const name="Nitesh";
// let date_of_birth=1998;
// var last_name="Kalyan";
// //console.log(name,date_of_birth);
// //console.log(last_name);
// last_name="Koilada";
// //console.log(last_name);
// let fullName=name+last_name;
// //console.log(fullName);

// //maths

// let number1=20**2;
// let number2=50;

// //console.log(number1);

// //templet strings

// let templet_string=`The full name of ${name } is : ${fullName}`;
// //console.log(templet_string);

// //arrays
// let array1=["st1", "str2", 1,3];
// array1.push("str3");

// console.log(array1);

// const greet= (name)=>{
//  const str22=`function: The full name of ${name } is : ${fullName}`;
//  return str22;
// };


// console.log(greet(name));

//callback functions



let data={
    content:[
     {first_name:"Nitesh"},
      {middle_name:"kalyan"},
      {last_name:"koilada"},
      {age:25}],
      login(){
        this.content.forEach(con=>{
         console.log(`The user ${con.first_name}  has loggedin`);
      })}
};
data.login();
const data2= data;
data.age=26;
console.log(data.age, data2.age);
console.log(Math.round(Math.random() *100));



//ul_html.setAttribute();
const ul=document.querySelector('ul');
const full_name=["Nitesh", "Kalyan ", "Koilada"];

let html=``;
full_name.forEach((person) => {
     html+=`<li>${person}<li>`;
     console.log( person);
});

ul.innerHTML =html;
const li_item=document.querySelectorAll('li');

li_item.forEach(li_items =>{
    li_items.addEventListener('click', e =>{
        console.log(e.de);
       }); 
});

