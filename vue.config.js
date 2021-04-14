module.exports={
    devServer:{
        open:true,
        host:"localhost",
        port:8080,
        https:false,
        hotOnly:false,
        proxy:{
            "/api":{
                target: 'https://eleme4-2021.herokuapp.com/api/',
            //    域名后记得加这个/api/忘家了就一直报404 
                ws:true,
                // secure:true,
                changOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}