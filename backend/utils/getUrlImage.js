

export const getUrlImageArr = (imgs) => {
    var rs = [];
    var i = 0;
    var rs = [];
    for (i = 0; i < imgs.length; i++) {
        console.log(">>>>>>>>>>>>>>>>BACKcoverImage", imgs[i].coverImage.data.toString('base64'));
        if (imgs[i].coverImage != null && imgs[i].coverImageType != null) {
            rs.push(`data:${imgs[i].coverImageType};charset=utf-8;base64,${imgs[i].coverImage.toString('base64')}`)
        }
    }
    return rs;
}