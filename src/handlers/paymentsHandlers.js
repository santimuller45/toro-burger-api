const { getAllPayments } = require('../controllers/paymentsControllers.js');

const getAllPaymentsHandler = async (req,res) => {
    try {
      const allPayments = await getAllPayments();
      res.status(200).json(allPayments);
    } catch (error) {
      res.status(400).send(error.message)
    }
};

module.exports = {
    getAllPaymentsHandler
}