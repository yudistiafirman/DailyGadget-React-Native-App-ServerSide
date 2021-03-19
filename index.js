const express= require('express')
const cors = require('cors')
const morgan= require('morgan')
require('dotenv').config()



const app= express()

const PORT=process.env.PORT

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("daily gadget boy");
  });
  
  app.listen(PORT, () => console.log(`app running in port ${PORT}`));
