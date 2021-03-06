const server = require("./src/app");
const fetch = require("node-fetch");
const { conn, Country } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('Listening on port 3001');
    fetch("https://restcountries.eu/rest/v2/all")
      .then((r) => r.json())
      .then((r) => {
        r.forEach((el) => {
          let country = {
            id: el.alpha3Code,
            name: el.name === "Åland Islands" ? "Aland Islands" : el.name,
            flag: el.flag,
            continent: el.region,
            area: el.area,
            population: el.population,
          };
          Country.create(country);
        });
      })
      .catch((err) => console.log(err));
  });
});
