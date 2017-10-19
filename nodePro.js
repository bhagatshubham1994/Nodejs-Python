var child_process_spawn = require("child_process").spawn;

var py = child_process_spawn("python",["pythonPro.py"]);

var data = "fun12";


var gloabalVar="";


py.stdout.on("data",function(data){
    gloabalVar = data.toString();
   // console.log(gloabalVar)
});

py.stdout.on("end",function(){
    console.log("Updated Data is:"+gloabalVar);
});


py.stdin.write(data);
py.stdin.end();



