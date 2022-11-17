//const res = require("express/lib/response");
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scraper in the world",
      location: {
        lat: 40.7484474,
        lng: -73.9871516,
      },
      address: "20 W 24th St, New York, NY 10001",
      creator: "u1",
    },
  ];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place)
    throw new HttpError("Could not find a place for the provided id.", 404);

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => p.creator === userId);
  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }
  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;