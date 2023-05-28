const authorModel = require("../model/authorModel")
const jwt = require("jsonwebtoken")

const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let author = await authorModel.create(data)
        return res.status(201).send({ "status": true, "data": author })
    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message })
        }
        else if (error.message.includes("duplicate")) {
            return res.status(400).send({ status: false, message: "email should be unique" })
        }
        else {
            return res.status(500).send({ status: true, message: error.message })
        }

    }

}

module.exports.createAuthor = createAuthor