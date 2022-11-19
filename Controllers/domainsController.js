const fs = require("fs");
const path = require("path");
const axios = require("axios");

const getDomains = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/ads.txt");

    const parsedData = response?.data?.toString()?.split("\n");

    let domainsArray = [];

    parsedData?.forEach((data) => {
      if (data?.includes(".com")) {
        const domain = data?.match(/.\w\S+?(?:.com)/)[0].replace(" ", "");

        const indexIfInDomainsArray = domainsArray?.findIndex(
          (domainItem) => domainItem?.name == domain
        );
        if (indexIfInDomainsArray > -1) {
          domainsArray[indexIfInDomainsArray].count += 1;
        } else {
          domainsArray.push({ name: domain, count: 1 });
        }
      }
    });
    return res.json(domainsArray);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = getDomains;
