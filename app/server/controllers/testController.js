const testService = require('../service').testService;

module.exports = {
    getlist(req, res) {
        return testService
            .listAll()
            .then(testLists => res.status(200).send(testLists))
            .catch(error => res.status(400).send(error));
    },
};