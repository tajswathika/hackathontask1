var gitrepcon;
var giturl="https://api.github.com/users/tajswathika/repos";
//gitrepcon=getdata();
getdata();


async function getdata()
{
    let gitrep=await fetch(giturl);
     gitrepcon=await gitrep.json();
    //document.write((gitrepcon)[0].name);
    var div1=document.createElement("div");
div1.setAttribute("class","maindiv");

var div2=document.createElement("div");
div2.setAttribute("class","img-box");

var img=document.createElement("img");

var div3=document.createElement("div");
div3.setAttribute("class","fullrepos");

var div4=document.createElement("div");
div4.setAttribute("class","hdhead");

var hd=document.createElement("h3");
hd.innerHTML="Repositories";

var div5=document.createElement("div");
div5.setAttribute("class","repos");

var tble=document.createElement("table");
tble.setAttribute("class","tbtable");

var tbody1=document.createElement("tbody");
//console.log((gitrepcon)[0].name);

for(var i=0;i<23;i++)
{
  //console.log((gitrepcon)[i].name);
   var tr1=document.createElement("tr");
  var td1=createtrth("td","<a href=repos.html> " + (gitrepcon)[i].name + "</a> <br></br> <hr>");
  
  tr1.append(td1);
tbody1.append(tr1);
tble.append(tbody1);

}


//document.body.append(tble);

div1.append(div2);
div2.append(img);
div1.append(div3);
div3.append(div4,div5);
div4.appendChild(hd);
document.body.append(div1);
div5.append(tble);

}




function createtrth(elementname, value="")
{
  var ele=document.createElement(elementname);
   ele.innerHTML=value;
   return ele;
}

