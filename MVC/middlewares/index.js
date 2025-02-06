const fs = require('fs')

function log() {
    return (req,res,next)=>{
        fs.appendFile('log.txt',
            `\n${Date.now()} : ${req.path}`,
            (err,data)=>{
                next();
            }
        )
    }
}

module.exports = {log}