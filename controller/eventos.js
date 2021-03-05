const { Event } = require('../models/events');

const eventosController = {
    get: async (req, res) => {
        let { offset = 0 } = req.query;
        offset = parseInt(offset);
        try {
            const d = await Event.findAndCountAll({offset: offset * 10, limit: 10, order: [['start', 'DESC']] });
            // console.log('offset :>> ', offset);
            // console.log(Math.ceil(d.count/10));
            d.next = offset+1 >= Math.ceil(d.count/10) ? null : ++offset;
            return res.json(d);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    
    post: async (req, res) => {
        const { title = 'kiss', start = new Date().setHours(48), end = new Date().setHours(96) } = req.body;
        try {
            const d = await Event.create({
                title,
                start,
                end
            });
            return res.json(d);
    
        } catch (error) {

            return res.status(400).json(error);
        }

    }
};

module.exports = eventosController;