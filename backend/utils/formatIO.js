export const getFormatDate = (date) => {
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Asia/Ho_Chi_Minh",
    };

    let formattedDate = date.toLocaleString("vi-VN", options);
    return formattedDate;
};
export const getTextSearch = (input) => {
    return input.replaceAll("-", " ");
};
