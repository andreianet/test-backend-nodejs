const app = require('./src/app');
const PORT = 3000;

app.listen(PORT, function () {
    console.log(`Servidor rodando...${PORT}`);
})

module.exports = app