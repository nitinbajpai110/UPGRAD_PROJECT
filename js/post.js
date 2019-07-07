var r=0;
//COMMENT SECTION FUNCTIONALITY
function addComments(id){
    
 var newItem = document.createElement("p");
 if(r==0)
 {
     newItem.setAttribute("id","added1");
 }

 if(r>0)
 {
     if(r==1)
     document.getElementById("added1").setAttribute("id","added2");
     if(r>1)
     document.getElementById("added3").setAttribute("id","added4");
     newItem.setAttribute("id","added3");

    
 }
//LIKE BUTTON FUNCTIONALITY
 var textnode = document.createTextNode(id.value);
 newItem.appendChild(textnode);

 var list = document.getElementById("addEventNames");
 list.insertBefore(newItem, list.childNodes[0]);
 r++;
 document.getElementById("userComments").value="";
}
var h=0;
document.getElementById("likeBlog").addEventListener("click",wor);
function wor(){
h++;
var n=document.createTextNode('d!');
if(h==1)
document.getElementById("likeicon").appendChild(n);
if(h==1)
document.getElementById("commentCount").innerHTML="1 person likes this!";
if(h>1)
document.getElementById("commentCount").innerHTML=h+" people have liked this!";

}

// EDIT BUTTON FUNCTIONALITY
function edit(){
    document.getElementById("blogBody").setAttribute("contentEditable","true");
    document.getElementById("blogTitleNew").setAttribute("contentEditable","true");

}