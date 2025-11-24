

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
 if(validateName() & validateprice() & validatecategroy() & validatedesc() )
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
else{
  if(validateName() != true)
  {
    alert("The Name is not valid");
  }
  else if(validateprice() != true)
  {
     alert("The price is Not valid");
  }
  else if(validatecategroy() != true)
  {
     alert("The categroy is Not valid");
  }
  else{
     alert("The descradtion is not valid");
  }
}
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

function search(trem){
  
  var cartona = "";
  for(var i=0;i < allProudct.length;i++)
  {
    if( allProudct[i].name.toLocaleLowerCase().indexOf(trem.toLocaleLowerCase()) == 0 || allProudct[i].category.toLocaleLowerCase().includes(trem.toLocaleLowerCase())  ){
        cartona += `<tr>
         <td>${ allProudct[i].name }</td>
         <td>${ allProudct[i].Price }</td>
         <td>${ allProudct[i].category }</td>
         <td>${ allProudct[i].productdesc }</td>
         <td> <button class="btn btn-danger" onclick="deleteProduct(${i})"  >Delete</button></td>
         <td> <button class="btn btn-warning" onclick= "updateproduct(${i})"  >Update</button></td>
          </tr>`
    }
  }
  document.getElementById("Data").innerHTML = cartona;

}
function validateName(){
  var regexpname = /^[a-z]{3,7}$/i
   return  regexpname.test(productName.value);
}
function validateprice(){
  var regexprice = /^[0-9]{1,10}[\$]?$/i
  return regexprice.test(productPrice.value);
}
function validatecategroy(){
  var regexpcategory =   /^[a-z]{3,8}$/i
  return  regexpcategory.test(productCategory.value);
}
function validatedesc(){
  var regexdesc =  /^[a-z]{3,100}$/i
  return regexdesc.test(productdesc.value);

}




