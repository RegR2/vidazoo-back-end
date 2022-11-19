const router = require("express").Router();
const getDomains = require("../Controllers/domainsController");

router.get("/getDomains", getDomains);

module.exports = router;
