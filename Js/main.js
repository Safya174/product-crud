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
if(localStorage.getItem("allProudct") != null)
{
   allProudct = JSON.parse(localStorage.getItem("allProudct"));
   displayAllProduct();
}
var curretIndex =  -1 ;
function addNewElement()
{
   var  product ={
     name: productName.value,
     Price: productPrice.value,
     category: productCategory.value,
     productdesc : productdesc.value
      
  }
  if(curretIndex != -1) 
  {
    
    allProudct[curretIndex] = product;
    
  }
  else{
  allProudct.push(product);
  localStorage.getItem("allProudct",JSON.stringify(allProudct));
  }
  document.getElementById("Update").innerHTML = "Add Element" ;
  clearForm();
  localStorage.setItem("allProudct", JSON.stringify(allProudct));

  displayAllProduct();
  curretIndex = -1;
  
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
         <td> <button class="btn btn-danger" onclick="deleteProduct(${i})"  >Delete</button></td>
         <td> <button class="btn btn-warning" onclick= "updateproduct(${i})"  >Update</button></td>
          </tr>`
  }
  document.getElementById("Data").innerHTML = cartona;
}
function deleteProduct(index){
 allProudct.splice(index,1);
 displayAllProduct();
 localStorage.setItem("allProudct", JSON.stringify(allProudct));
}
function updateproduct(index){
   productName.value = allProudct[index].name;
   productPrice.value = allProudct[index].Price;
   productCategory.value = allProudct[index].category;
   productdesc.value = allProudct[index].productdesc;
   curretIndex = index;
   document.getElementById("Update").innerHTML = "Update" ;
   localStorage.setItem("allProudct", JSON.stringify(allProudct));

}



