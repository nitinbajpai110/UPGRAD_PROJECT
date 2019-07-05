document.getElementById('lnk').addEventListener("click",function(){
    $('#exampleModal').modal('hide')
});
document.getElementById('allpost').addEventListener("click",function(){
    location.href="html/bloglist.html";
})
function verify(){
var a1=document.getElementById('password1').value;
var a2=document.getElementById('password2').value;
if(a1!=a2)
{
    alert("PASSWORD AND CONFIRM PASSWORRD DIDN'T MATCHED");
}
else
alert('YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY');
}

function postt(){
    location.href="post.html";
}