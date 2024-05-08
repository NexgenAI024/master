var productcontainer = document.getElementById("productsss")
var search = document.getElementById("collsearch")
var productlist = productcontainer.querySelectorAll("div.productbox")

search.addEventListener("keyup",function(){
    var enterval = event.target.value.toUpperCase()

    for(count=0;count<productcontainer.length;count = count+1){

        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterval)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})