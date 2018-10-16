const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;