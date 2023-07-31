const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://university-admin:lbCp3ms7swY4fZEJ@atlascluster.u7i80uy.mongodb.net/build-my-pc?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("build-my-pc").collection("products");
    const { productId, category } = req.query;

    if (req.method === "GET" && productId) {
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });
      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET" && category) {
      const product = await productsCollection
        .find({
          Category: category,
        })
        .toArray();
      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
  }
}
export default run;
