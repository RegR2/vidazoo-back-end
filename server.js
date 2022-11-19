const express = require(`express`);
const domainsRouter = require("./Routes/domainsRouter");
const cors = require("cors");
const server = express();
const domains = "/domains";
const axios = require("axios");
const fs = require("fs");

// these are here and not in a .env file so you know which port to listen on when testing
const directory = "http://localhost:3000";
const port = 5500;

server.use(cors({ origin: directory, credentials: true }));

server.listen(port, async () => {
  console.log(`server listening on ${port}`);
});

server.use(domains, domainsRouter);
