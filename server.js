const express = require(`express`);
const domainsRouter = require("./Routes/domainsRouter");
const cors = require("cors");
const server = express();
const domains = "/domains";
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const directory = "http://localhost:3000";

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.use(cors({ origin: directory, credentials: true }));

server.listen(port, async () => {
  console.log(`server listening on ${port}`);
});

server.use(domains, domainsRouter);
