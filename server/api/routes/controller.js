const {Board} = require('../models');

const getBoards = async(req,res,next)=>{
    try {
        const boards = await Board.find({});
        res.json(boards);        
    } catch (error) {
        console.error(error);
        next(error);
    }
}

const postBoard = async(req,res,next)=>{
    const {body} = req;
    try {
        const board = await new Board(body);
        res.json(board);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {getBoards, postBoard};