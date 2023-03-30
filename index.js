import express from 'express'
const app=express()

app.get('/articles', (req, res) => res.send('obteniendo empleados'))
app.post('/articles', (req, res) => res.send('creando empleados'))
app.put('/', (req, res) => res.send('actualizando empleados'))

app.delete('/articles', (req, res) => res.send('elimando empleados'))



app.listen(3000)
console.log('server running on port 3000')