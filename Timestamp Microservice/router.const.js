import { Router } from "express";

let router = Router();

router.get("/api/date", (req, res) => {
  res.json({
    message: "I meant in milliseconds or a real date in a string",
    exampleInMiliseconds: 1451001600000,
    exampleInString: "2015-12-25",
  });
});

router.get("/api/:date", (req, res) => {
  let date = new Date(req.params.date);

  if (date.toUTCString() === "Invalid Date") {
    date = new Date(Number(req.params.date));
  }

  if (date.toUTCString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
    });
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

export default router;
