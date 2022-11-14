const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

export function saveSingleFile(doc, coverEncoded) {
    if (coverEncoded == null) return

    var img = [];
    const cover = JSON.parse(coverEncoded)
    console.log("COVER>DTAT", cover.data.split('/')[0]);
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