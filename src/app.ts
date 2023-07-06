import express, {Application, NextFunction, Request, Response} from 'express'
import * as attendanceSheet from './db.json'

const cors = require('cors')

const app: Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const port: number = 3001

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})


app.get('/attendance', (req: Request, res: Response, next: NextFunction) => {
    res.send(attendanceSheet)
})

// POST attendance/action
app.post('/attendance/action', (req: Request, res: Response, next: NextFunction) => {
    const bodyJSON = req.body;
    res.send({...bodyJSON, status: 'success'})
})

//POST sign


// DELETE attendance/student
