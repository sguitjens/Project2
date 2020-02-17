module.exports = (app) => {
    app.get('/user/signin/callback', (req, res, next) => {
        const { query } = req; 
        const { code } = code;

        if (!code) {
            return res.send({
                success: false, 
                message: "error: no code"
            });
        }
        console.log('code', code);
    });
};