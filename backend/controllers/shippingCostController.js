import ShippingCost from "../models/shippingCostModel.js";

const zoneOne = ["Quận 1", "Quận 2", "Quận 3"]
const zoneTwo = ["Quận 4", "Quận 5", "Quận 6"]
const zoneThree = ["Quận 7", "Quận 8", "Quận 9"]

// body gồm starting Number, destination Number, cost Number
export const updateShipCost = async (req, res, next) => {
    try {
        let startPoint, endPoint;
        let start = req.body.starting;
        let end = req.body.destination;
        if (start < end) {
            startPoint = start;
            endPoint = end;
        }
        else if (start > end) {
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
                $set: req.body
            }
        )
        res.status(200).json("Shipping Cost has been updated.");

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
}

export const createShipCost = async (req, res, next) => {
    try {
        const start = getZoneName(req.body.start)
        const end = getZoneName(req.body.end);
        const body = { starting: start, destination: end, cost: req.body.cost }
        const shipCost = new ShippingCost(body)
        await shipCost.save();
        res.status(200).json("Shipping Cost has been created.");

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
}


export const calculate = async (req, res, next) => {
    try {
        let startPoint, endPoint;

        const start = getZoneName(req.query.start)
        const end = getZoneName(req.query.end);
        // cung quan
        if (req.query.start === req.query.end) {
            startPoint = -1;
            endPoint = -1;
        }
        else if (start < end) {
            startPoint = start;
            endPoint = end;
        }
        else if (start > end) {
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
            destination: endPoint
        })
        res.status(200).json(shipCost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err });
    }
};

function getZoneName(address) {
    if (zoneOne.includes(address)) {
        return 1;
    }
    else if (zoneTwo.includes(address)) {
        return 2;
    }
    else if (zoneThree.includes(address)) {
        return 3;
    }
    return null;
}

