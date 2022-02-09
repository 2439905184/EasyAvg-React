//分词器
const cmd = "@"
var ch = "@ch" //创建或者更改角色
var cha = "@cha" //角色控制（基础）
var chs = "@chs" // 角色控制（高级）
var bg = "@bg"  //创建或者更改背景
var bgm = "@bgm" //播放一首背景音乐
var menu = "@menu"  //设置按钮菜单
var stop = "@stop" //暂停
var goto = "@goto" //标签跳转
var cmd_if   = "@if" //分支逻辑控制
var cmd_label = ":" //定义标签
var cmd_load  = "@load" //跳转到指定的游戏代码

function EasyAvgTokenizer()
{ 
    //@return {string} 按行号分割的文本
    this.input = function input(file)
    {
        var raw_result
        //逐行读取
        $.ajax({url:file,async:false,success:function(result)
        {
            // alert(result)
            raw_result = result.split("\n")
        }})
        return raw_result
    }
    //分割每一行单独的文本
    this.tokenizer = function(p_cmd)
    {
        //console.debug(p_cmd)
        //console.debug(typeof(p_cmd))
        var splited_code = p_cmd.split(/\s+/)
        return splited_code
    }
   
}