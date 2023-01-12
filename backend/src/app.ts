import express from 'express';
import { port } from './config/config'

const app = express()

app.listen(port, () => {
	console.log("server run")
})