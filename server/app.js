const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://admin-rohan:rohan123@cluster0.qom7r.mongodb.net/gpl-ninja?retryWrites=true&w=majority",
);

mongoose.connection.once("open", () => {
  console.log("Connected with database ");
});

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Listening to the server ${PORT}`);
});
