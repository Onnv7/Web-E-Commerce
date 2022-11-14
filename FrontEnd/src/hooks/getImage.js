
'use strict';
const getUrlImage = (imgs) => {
    var rs = [];
    var i = 0;
    var rs = [];
    for (i = 0; i < imgs.length; i++) {
        console.log(">>>>>>>>>>>>>>>>typeof coverImage", typeof imgs[i].coverImage.toString('base64'));
        console.log(">>>>>>>>>>>>>>>>coverImage", imgs[i].coverImage.toString('base64').length);
        if (imgs[i].coverImage != null && imgs[i].coverImageType != null) {
            rs.push(`data:${imgs[i].coverImageType};charset=utf-8;base64,${JSON.stringify(imgs[i].coverImage.toString('base64'))}`)
        }
        //`data:${this.img[i].coverImageType};charset=utf-8;base64,${this.img[i].coverImage.toString('base64')}`
    }
    return rs;
}
export default getUrlImage;