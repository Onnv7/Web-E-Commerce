// TODO: add image type to imageMimeTypes
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
export function convertImageToData(coverEncoded) {
    if (coverEncoded == null) return;

    var data = getDataFromImage(coverEncoded);

    return data;
}

export function saveFileObj(doc, coverEncoded) {
    if (coverEncoded == null) return;
    var data = getDataFromImage(coverEncoded);
    doc.img = data;
}
export function saveSingleFile(doc, coverEncoded) {
    if (coverEncoded == null) return;

    var img = [];
    var data = getDataFromImage(coverEncoded);
    img.push(data);
    doc.img = img;
}
export function saveMultipleFile(doc, coverEncoded) {
    if (coverEncoded == null) return;
    var i = 0;
    var img = [];
    var data = {};
    for (i = 0; i < coverEncoded.length; i++) {
        var data = getDataFromImage(coverEncoded[i]);
        img.push(data);
    }
    doc.img = img;
}
// convert from encoded image to data img
export function getDataFromImage(coverEncoded) {
    const cover = JSON.parse(coverEncoded);
    var data;
    if (cover != null) {
        data = {
            coverImage: new Buffer.from(cover.data, "base64"),
            coverImageType: cover.type,
        };
    }
    return data;
}
