const expres = require('express')
const cors = require('cors')
const routeStock = require('./routes/user_routes')

const app = expres()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Mengizinkan semua metode HTTP
    allowedHeaders: ['Content-Type', 'Authorization'] // Mengizinkan header yang diperlukan
}));
app.use(expres.json())

app.use('/stock', routeStock)

app.listen(2000, () => {
    console.log('Listen on port 2000')
})