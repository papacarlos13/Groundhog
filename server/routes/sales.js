const { Router } = require("express");
const router = Router();
const sales = require("../models/Sales");

// Create record in MongoDB
router.post("/", (request, response) => {
  const newSales = new sales.model(request.body);
  newSales.save((err, sales) => {
    return err ? response.sendStatus(500).json(err) : response.json(sales);
  });
});

// Get all sales records
router.get("/", (request, response) => {
  sales.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a sales entry by ID
router.get("/:id", (request, response) => {
  sales.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a sales entry by ID
router.delete("/:id", (request, response) => {
  sales.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a sales entry by ID
router.put("/:id", (request, response) => {
  const body = request.body;
  sales.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        product: body.product,
        date: body.date,
        day: body.day,
        produced: body.produced,
        sold: body.sold,
        leftover: body.leftover
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
