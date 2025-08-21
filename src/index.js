const express = require('express');
const apiRoutes = require('./routes');

const { ServerConfig } = require('./config/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on Port : ${ServerConfig.PORT}`);
});

