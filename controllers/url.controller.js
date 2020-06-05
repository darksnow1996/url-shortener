const {Response} = require('../helpers');
const {urlService} = require('../services');
class urlController{
    static async createUrl(req,res,next){
        try{
        const longUrl = req.body.url;
        const url = await urlService.shortenUrl(longUrl);

        return Response.ok(res,{url});
        }
        catch(error){
            next(error);
        }
        
    }

    static async getUrl(req,res,next){
        try{
            const {urltoken} = req.params;
            const url =  await urlService.getUrl(urltoken);
            if(Object.keys(url).length === 0){
                Response.notFoundError(res,"Url does not exist");

            }
            Response.ok(res,{
                url
            });

        }
        catch(error){
            next(error);
        }
    }

}

module.exports = urlController