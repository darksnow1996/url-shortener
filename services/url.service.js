const Url = require('../models/url.model');
const {generateToken} = require('../helpers');
class urlService {
    static async findByToken(token){
        const url = await Url.find({
            token
        }).limit(1);
        return url;
    }
    static async shortenUrl(longUrl){
        try{
        const token = generateToken();
        const payload = {
            token,
            longUrl
        }
        const url =  new Url(payload);

        return await url.save();   
    }
    catch(error){
        throw error;
    }

    }

    static async getUrl(token){
        try{
            const url = await this.findByToken(token);
           // console.log(url[0]._id);
             let newUrl = {};
            if(url.length > 0){
                 newUrl = await Url.findById(url[0]._id);
            }
           
            return newUrl;
        }
        catch(error){
            throw error;
        }
    }

}

module.exports = urlService;