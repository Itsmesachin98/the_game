const express = require("express");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Server is running smoothly!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
