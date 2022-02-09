//const tokenizer = new Tokenizer()
$(function()
{
    var lines 
    
    function init()
    {
        $.get("module/EasyAvg.json",function(data,status)
        {
            console.log(data)
            var json = JSON.stringify(data)
            localStorage.setItem("EasyAvg",json)
        })
    }
    function start_game()
    {
        var json = JSON.parse(localStorage.getItem("EasyAvg"))
    }   
    init()
    start_game()
})
function EasyAvg()
{
    this.execute_line = function(line_index)
    {
        var json = JSON.parse(localStorage.getItem("EasyAvg"))
        lines = tokenizer.input(json.init_script)
        //console.debug("文件的所有行:"+lines)
        var splited_line = tokenizer.tokenizer(lines[line_index].toString())
        if(splited_line[0] == "@bg")
        {
            console.log("更换背景")
            console.debug(splited_line)
            //$("#bg").attr("src",splited_line[1])
        }
    }
}
