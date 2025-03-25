import Data from "./Model.js"

export const Read = async(req,res) =>{
    try {
        const read = await Data.find()
        res.status(202).json(read)
    } catch (error) {
        res.status(404).json(error)
    }
}