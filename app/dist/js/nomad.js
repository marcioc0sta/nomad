$(function(){$('[data-toggle="tooltip"]').tooltip(),$("#filter-trigger").on("click",function(){$(".filters-row").toggleClass("hidden")});var t=new Date,e=t.getMonth()+1,o=t.getDate(),l=t.getFullYear()+"-"+((""+e).length<2?"0":"")+e+"-"+((""+o).length<2?"0":"")+o;$("#search").val(l),$("#search").mask("9999-99-99",{placeholder:"YYYY-MM-DD"}),$(".content-toogle").on("click",function(){$(this).parent().toggleClass("not-visible"),$(this).toggleClass("text-rotate")}),$("body").swipe({swipe:function(t,e,o){$(".search-content").toggleClass("not-visible"),$(".content-toogle").toggleClass("text-rotate")}}),$("body").swipe({fingers:1,allowPageScroll:"auto",threshold:200})});