/*var firstName = document.getElementById("fn");    
var LastName = document.getElementById("ln");   

function sayName(){
  window.alert("Hello"+" "+firstName.value +"  "+LastName.value) ;


}*/
/*var Student = [
  {Name:"Safya",grade:"A+"},
  {Name:"Ahmed",grade:"A"},
   {Name:"yasir",grade:"B"},

]
function showinfo(){
   for(i=0;i < Student.length;i++)
   {
      alert(Student[i].Name + "  " +Student[i].grade);
   }
}*/
var productName = document.getElementById("fn");
var productPrice = document.getElementById("pc");
var productCategory = document.getElementById("pb");
var productdesc = document.getElementById("pd");
var allProudct = [];
function addNewElement()
{
  var  product ={
     name: productName.value,
     Price: productPrice.value,
     category: productCategory.value,
     productdesc : productdesc.value
      
  }
  allProudct.push(product);
   clearForm();
   displayAllProduct();


}
function clearForm()
{
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productdesc.value = "";
}
function displayAllProduct()
{
  var cartona = ""
  for(var i=0;i < allProudct.length;i++)
  {
    
    cartona +=   `<tr>
         <td>${ allProudct[i].name }</td>
         <td>${ allProudct[i].Price }</td>
         <td>${ allProudct[i].category }</td>
         <td>${ allProudct[i].productdesc }</td>
          </tr>`
  }
  document.getElementById("Data").innerHTML = cartona;
}


