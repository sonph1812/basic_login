const http = require('http');
let server = http.createServer(function (req, res){
    let txt =''
    if(req.url === "/login"){
        txt ="login success"
    }else {
        txt ="login fail"
    }
    res.end(txt)
})
server.listen(8000,function (){
    console.log("running at port 8000")
})