$(document).ready(function(){
    $(".imp1,.show1").click(function(){
        $("div.imp1").toggle();
        $("div.show1").toggle();
    })
    $(".imp2,.show2").click(function(){
        $("div.imp2").toggle();
        $("div.show2").toggle();
    })
    $(".imp3,.show3").click(function(){
        $("div.imp3").toggle();
        $("div.show3").toggle();
    }) 
    $(function(){
        $(".lur1").mouseover(function(){
            $(".poico1a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico1a").hide();
        })
    })
    $(function(){
        $(".lur2").mouseover(function(){
            $(".poico2a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico2a").hide();
        })
    })
    $(function(){
        $(".lur3").mouseover(function(){
            $(".poico3a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico3a").hide();
        })
    })
    $(function(){
        $(".lur4").mouseover(function(){
            $(".poico4a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico4a").hide();
        })
    })
    $(function(){
        $(".lur5").mouseover(function(){
            $(".poico5a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico5a").hide();
        })
    })
    $(function(){
        $(".lur6").mouseover(function(){
            $(".poico6a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico6a").hide();
        })
    })
    $(function(){
        $(".lur7").mouseover(function(){
            $(".poico7a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico7a").hide();
        })
    })
    $(function(){
        $(".lur8").mouseover(function(){
            $(".poico8a").show();
            $(this).css("color","white")

        }).mouseleave(function(){
            $(".poico8a").hide();
        })
    })
    
});
function alat(){
    // event.preventDefault();
    var cal = document.getElementById("name").value;
    alert("Dear "+cal+", we have received your message. Thank you fro reaching out to us" );
}