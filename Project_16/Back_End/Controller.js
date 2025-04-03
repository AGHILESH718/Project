import Data from "./Model.js"

export const Read = async (req, res) => {
    try {
        const read = await Data.find()
        res.status(202).json(read)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const Insert = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body
        const finddata = await Data.findOne({ Name })
        if (finddata) {
            res.status(202).json("User already existed")
        }
         else{
            const insertData = await Data({
                Name: Name,
                Email: Email,
                Password: Password
            }).save()
        }
    } catch (error) {
        res.status(404).json(error)
    }
}