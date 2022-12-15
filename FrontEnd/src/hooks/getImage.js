const getUrlImage = (imgs) => {
  var rs = [];
  var i = 0;
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].coverImage != null && imgs[i].coverImageType != null) {
      rs.push(
        `data:${imgs[i].coverImageType};charset=utf-8;base64,${imgs[
          i
        ].coverImage.toString("base64")}`
      );
    }
    //`data:${this.img[i].coverImageType};charset=utf-8;base64,${this.img[i].coverImage.toString('base64')}`
  }
  return rs;
};
export default getUrlImage;
