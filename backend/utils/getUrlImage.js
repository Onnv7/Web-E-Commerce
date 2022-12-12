export const getUrlImageArr = (imgs) => {
  var i = 0;
  var rs = [];
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].coverImage != null && imgs[i].coverImageType != null) {
      rs.push(
        `data:${imgs[i].coverImageType};charset=utf-8;base64,${imgs[
          i
        ].coverImage.toString("base64")}`
      );
    }
  }
  return rs;
};
export const getUrlImageForArrObject = (objs) => {
  const len = objs.length;
  let i = 0;
  const rs = [];
  for (i; i < len; i++) {
    const imgs = getUrlImageArr(objs[i].img);
    const { img, ...rest } = objs[i]._doc;
    const obj = { ...rest, imgPath: imgs };
    rs.push(obj);
  }
  return rs;
};
