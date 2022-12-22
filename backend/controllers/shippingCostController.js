import ShippingCost from "../models/shippingCostModel.js";

const zoneOne = [
    "Quận Tân Bình",
    "Quận Phú Nhuận",
    "Quận Gò Vấp",
    "Quận Tân Phú",
    "Quận 1",
    "Quận 3",
    "Quận 5",
    "Quận 10",
    "Quận 11",
];
const zoneTwo = [
    "Quận Bình Thạnh",
    "Quận Bình Tân",
    "Quận 4",
    "Quận 6",
    "Quận 8",
    "Quận 9",
    "Quận 12",
    "Thành phố Thủ Đức",
];
const zoneThree = [
    "Huyện Hóc Môn",
    "Huyện Bình Chánh",
    "Huyện Bình Chánh",
    "Huyện Nhà Bè",
    "Quận 7",
    "Huyện Củ Chi",
    "Huyện Cần Giờ",
];

// body gồm starting Number, destination Number, cost Number
export const updateShipCost = async (req, res, next) => {
    try {
        let startPoint, endPoint;
        let start = req.body.starting;
        let end = req.body.destination;
        if ((start === -1) & (end === -1)) {
            startPoint = -1;
            endPoint = -1;
        } else if (start < end) {
            startPoint = start;
            endPoint = end;
        } else if (start > end) {
            startPoint = end;
            endPoint = start;
        }
        // cung zone
        else {
            startPoint = 0;
            endPoint = 0;
        }
        const shipCost = await ShippingCost.findOneAndUpdate(
            {
                starting: startPoint,
                destination: endPoint,
            },
            {
                $set: req.body,
            }
        );
        res.status(200).json("Shipping Cost has been updated.");
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

export const createShipCost = async (req, res, next) => {
    try {
        const start = req.body.start;
        const end = req.body.end;
        const body = { starting: start, destination: end, cost: req.body.cost };
        const shipCost = new ShippingCost(req.body);
        await shipCost.save();
        res.status(200).json("Shipping Cost has been created.");
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

export const getAllShipCost = async (req, res, next) => {
    try {
        const shipCost = await ShippingCost.find({});
        res.status(200).json(shipCost);
    } catch (err) {
        res.status(500).json({ err: err });
        next(err);
    }
};

export const getShipCostByZone = async (req, res, next) => {
    try {
        let startPoint, endPoint;
        const start = Number(req.query.start);
        const end = Number(req.query.end);
        if ((start === -1) & (end === -1)) {
            startPoint = -1;
            endPoint = -1;
        } else if (start < end) {
            startPoint = start;
            endPoint = end;
        } else if (start > end) {
            startPoint = end;
            endPoint = start;
        }
        // cung zone
        else {
            startPoint = 0;
            endPoint = 0;
        }
        const shipCost = await ShippingCost.findOne({
            starting: startPoint,
            destination: endPoint,
        });
        res.status(200).json(shipCost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

export const getShipCost = async (req, res, next) => {
    try {
        let startPoint, endPoint;

        const start = getZoneName(req.query.start);
        const end = getZoneName(req.query.end);
        // cung quan
        if (req.query.start === req.query.end) {
            startPoint = -1;
            endPoint = -1;
        } else if (start < end) {
            startPoint = start;
            endPoint = end;
        } else if (start > end) {
            startPoint = end;
            endPoint = start;
        }
        // cung zone
        else {
            startPoint = 0;
            endPoint = 0;
        }
        const shipCost = await ShippingCost.find({
            starting: startPoint,
            destination: endPoint,
        });
        res.status(200).json(shipCost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

function getZoneName(address) {
    if (zoneOne.includes(address)) {
        return 1;
    } else if (zoneTwo.includes(address)) {
        return 2;
    } else if (zoneThree.includes(address)) {
        return 3;
    }
    return null;
}
