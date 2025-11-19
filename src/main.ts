import express = require("express");
import cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
// All CAD Parts In-Memory Array.
let Parts: CadParts[] = [];

let counter = 0;

// Type Category which defines only four categories of CAD Parts are allowed(Pipe,Valve,Flange,Elbow).

type Category = "Pipe" | "Valve" | "Flange" | "Elbow";

// Defining Interface of CAD Parts which tells what properties or Atrribute does a CAD Part must Contain.

interface CadParts {
  id:number;
  name: string;
  category: Category;
  material: string;
  diameter: number;
}

// Get Route To Get The All Current CAD Parts in the Factory.

app.get("/api/parts", (req, res) => {
  res.json({ Parts });
});

// Delete Route Which takes an Id as an input in the URL and deletes the Particular CAD Parts matching with the ID from the Array.

app.delete("/api/parts/:id", (req, res) => {
  // Extracting ID from the URL and Parsing it into a number.

  const id: number = Number(req.params.id);

  // Checking if ID is empty or not.
  // If Id is empty return 400 Status code & ask to enter the Id.

  if (!id) {
    res.status(400).json({
      message: "Id is required for deletion",
    });
  }
  // If Id exist we find for that part in the Parts Array.
  else {
    const index = Parts.findIndex((part) => part.id === id);

    // If Id not found in the Parts Array return Part not Found.

    if (index === -1) {
      return res.status(404).json({ message: "Part not found" });
    }

    // If Part Found in the Parts Array Delete The particular Part From the Parts Array.

    Parts.splice(index, 1);

    res.status(201).json({
      message: "Part deleted Successfully",
    });
  }
});

// Post Route Takes Input of the CAD Parts that needs to be added in the Parts Array in the form of JSON data from Body Section and and Add That Part in the Parts Array.

app.post("/api/parts", (req, res) => {
  const { name } = req.body;
  const { category } = req.body;
  const { material } = req.body;
  const { diameter } = req.body;

  // Checking If the Parts Contain all the Important data or not.

  if (!name || !category || !material || diameter === undefined) {
    res.json({
      message: "Parts must contain {name:,category:,matrial:,diameter:}",
    });
  } else {
    const newTask: CadParts = {
      id: counter++,
      name: name,
      category: category,
      material: material,
      diameter: Number(diameter),
    };

    Parts.push(newTask);
    res.status(201).json({
      message: "Task added Successfully",
    });
  }
});

// Host the Server on the port http://localhost:3000.

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});


