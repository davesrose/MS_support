'use strict';

const Events = require('../models/event');

exports.createEvent = function(req, res, next) {

    const eventTitle = req.body.eventTitle;
    const eventDate = req.body.eventDate;
    const eventDescription = req.body.eventDescription;
    const eventStreet = req.body.eventStreet;
    const eventCity = req.body.eventCity;
    const eventZip = req.body.eventZip;
    const eventInfo = req.body.eventInfo;
    const eventOwner = req.body.eventOwner;


    if (!eventTitle) {
        return res.status(422).send({
            error: 'You must enter an event title!'
        });
    }
    if (!eventDate) {
        return res.status(422).send({
            error: 'You must enter an event date!'
        });
    }
    if (!eventDescription) {
        return res.status(422).send({
            error: 'You must enter a detailed description of what your event is about!'
        });
    }
    if (!eventStreet) {
        return res.status(422).send({
            error: 'You must enter a street address!'
        });
    }
    if (!eventCity) {
        return res.status(422).send({
            error: 'You must enter the event city!'
        });
    }
    if (!eventZip) {
        return res.status(422).send({
            error: 'You must enter a zip code'
        });
    }
    if (!eventInfo) {
        return res.status(422).send({
            error: 'You must enter your contact information!'
        });
    }
    if (!eventOwner) {
        return res.status(422).send({
            error: 'You must enter the event host!'
        });
    }


    let event = new Events({
        name: name,
        email: email,
        status: "Open",
        message: message
    });
    event.save(function(err, user) {
        if (err) {
            return next(err);
        }
        res.status(201).json({
            message: "Thanks! Your request was submitted successfuly!"
        });
        next();
    })
}