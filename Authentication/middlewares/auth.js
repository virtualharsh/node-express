async function restrictUser(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) {
        return res.redirect('/login');
    }
    next();
}

async function checkCookie(req, res, next) {
    const userUid = req.cookies?.uid;
    
    if (userUid) {
        return res.redirect('/');
    }
    next();
}




module.exports = { restrictUser,checkCookie };
