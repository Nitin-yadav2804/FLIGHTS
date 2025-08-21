const statusCodes = require('http-status-codes')

const { AirplaneService } = require('../services');


/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                .status(statusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create an airplane',
                    data: airplane,
                    error: {}
                })
    } catch (error) {
        return res
                .status(statusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: flse,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error
                })
    }
}

module.exports = {
    createAirplane
}
