// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
//navgation bar function//
function navFun(){
    let x=document.getElementById("navId");
      if(x.className==="nav"){
        x.className+=" navRes";
      }
      else{
        x.className="nav";
      }
      console.log("x.className");
}