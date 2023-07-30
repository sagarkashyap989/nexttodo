export const errorHandler = (res, statusCode = 500, msg = 'Internal server error') => {
    return res.status(statusCode).json({
        success: false,
        msg
    })
}

export const asyncError = (passedFunc) => (req, res) => {
    return Promise.resolve(passedFunc(req, res)).catch((err) => {
        return errorHandler(res, 500, err.message);
    })
}