const exprees = require('express');
const app = exprees();
const port = 3000;
const programingLanguagesRouter = require('./routes/programmingLanguages');

app.use(exprees.json());
app.use(
    exprees.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.json({message: 'OK'});
});

app.use('/languages', programingLanguagesRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`)
});
