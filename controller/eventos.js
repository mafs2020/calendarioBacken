const { Event } = require('../models/events');

const eventosController = {
    get: async (req, res) => {
        try {
            const d = await Event.findAll({});
            return res.json(d);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    post: async (req, res) => {
        console.log('llego');
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