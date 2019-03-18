const request = require('superagent');

module.exports = ({ router }) => {
    router.get('/dogs', async (ctx, next) => {
        await request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                ctx.body = res.body;
            })
            .catch(err => {
                console.log(err);
            });
    });
};