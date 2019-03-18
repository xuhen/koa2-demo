module.exports = ({ router }) => {
    router.get('/', (ctx, next) => {
        ctx.body = {
            name: 'Edward',
            sex: 'male'
        };
    });
};