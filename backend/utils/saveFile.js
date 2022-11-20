// TODO: add image type to imageMimeTypes
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
export function saveSingleFile(doc, coverEncoded) {
    if (coverEncoded == null) return

    var img = [];
    const cover = JSON.parse(coverEncoded)
    if (cover != null && imageMimeTypes.includes(cover.type)) {
        var data = {
            coverImage: new Buffer.from(cover.data, 'base64'),
            coverImageType: cover.type
        }
        img.push(data);
    }
    doc.img = img;
}
export function saveMultipleFile(doc, coverEncoded) {
    if (coverEncoded == null) return
    var i = 0;
    var img = [];
    for (i = 0; i < coverEncoded.length; i++) {
        const cover = JSON.parse(coverEncoded[i])
        var data = {}
        data = {
            coverImage: new Buffer.from(cover.data, 'base64'),
            coverImageType: cover.type
        }
        img.push(data);
    }
    doc.img = img;
}