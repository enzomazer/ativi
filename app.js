import http from 'http'
import express from 'express'
import { router } from './routes/guitarrasRoutes.js'

const app = express()
app.use(express.json())

app.use('/guitarras', router)

app.listen(3333, () => {
    console.log("rodando 333")
})




//const server = http.createServer((req, res) => {
  //  const{method, url} = req
  //  console.log(method, url)
  //  if(method === "GET") {console.log("gettou")}
 //   res.end('hello world')
//})

//server.listen(3333)wad