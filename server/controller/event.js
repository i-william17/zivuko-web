const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const Event = require("../model/event");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const cloudinary = require("cloudinary");

// create event  
router.post(
  "/create-event",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      if (!shopId) {
        return next(new ErrorHandler("Shop Id is required!", 400));
      }

      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      }

      let images = [];
      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else if (Array.isArray(req.body.images)) {
        images = req.body.images;
      } else {
        return next(new ErrorHandler("Images should be a string or an array!", 400));
      }

      const imagesLinks = [];
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "events",
        });
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      const eventData = req.body;
      eventData.images = imagesLinks;
      eventData.shop = shop;

      const event = await Event.create(eventData);

      res.status(201).json({
        success: true,
        event,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// get all events
router.get("/get-all-events", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return next(new ErrorHandler(error.message, 400));
  }
});

// get all events of a shop
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ shopId: req.params.id });
      res.status(200).json({
        success: true,
        events,
      });
    } catch (error) {
      console.error("Error fetching shop events:", error);
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// delete event of a shop
router.delete(
  "/delete-shop-event/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return next(new ErrorHandler("Event not found with this id", 404));
      }

      for (let i = 0; i < event.images.length; i++) {
        await cloudinary.v2.uploader.destroy(event.images[i].public_id);
      }

      await event.remove();
      res.status(200).json({
        success: true,
        message: "Event Deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting event:", error);
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// all events --- for admin
router.get(
  "/admin-all-events",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find().sort({ createdAt: -1 });
      res.status(200).json({
        success: true,
        events,
      });
    } catch (error) {
      console.error("Error fetching admin events:", error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
