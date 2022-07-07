const express = require("express");
const router = express.Router();
const ctrlIndex = require("../controllers/tool-ui-controller");

router.get("/deneme-tool", ctrlIndex.tool_ui);

module.exports = router;
