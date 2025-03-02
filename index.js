var clicked=""
$("button").click(function(){

    let value=$(this).attr('value')
  

    if (value =="="){
    
        $(".display").html(`<h1>${eval(clicked)}</h1>`)

    }else if(value=="ac"){
        clicked=""
        $(".display").html(`<h1>${clicked}</h1>`)


    }
    else if(value=="back"){
        clicked=clicked.slice(0,-1)
        $(".display").html(`<h1>${clicked}</h1>`)
    }else{
        clicked+= value
        $(".display").html(`<h1>${clicked}</h1>`)


        
    }

    
})


