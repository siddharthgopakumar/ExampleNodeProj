import express from 'express';

const app = express();

app.set('view engine', 'ejs');
// app.use(logger);

app.get('/', logger, (req, res) => {
    res.render("index", { text: "World" });
});

const userRouter = require('./routes/users');

app.use('/users', userRouter)

function logger(req: { originalUrl: any; }, res: any, next: () => void) {
    console.log(req.originalUrl);
    next();
}

app.listen(4321, () => {
    console.log('Running on 4321');
});


