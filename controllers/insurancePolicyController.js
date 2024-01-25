const asyncHandler = require("express-async-handler")

const postPolicies = asyncHandler(
    async (req, res) => {
        try {
            const { policies } = req.body
            res.status(200).json({message: "Policies are added"})

        } catch(error) {
            res.status(500).json({message: "Internal server error"}, error.message);

        }
    }
)

module.exports = {
    postPolicies
}