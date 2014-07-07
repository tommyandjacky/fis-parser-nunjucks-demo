/** 
 * @require shownews.tmpl.js
 */
$(function(){
    $.getJSON("shownews/shownews.json",function(data){
        nunjucks.render("shownews/shownews.tmpl",data,function(err,res){
            $("#wrapper").append(res);
        })
    });
});