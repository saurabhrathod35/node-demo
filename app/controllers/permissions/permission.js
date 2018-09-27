const mongoose = require('mongoose');
const PERMISSIONSCHEMA = require('../../models/permissions.model');
const USERSCHEMA = require('../../models/user.model')
const create = (req, res, next) => {
    PERMISSIONSCHEMA.create(req.body).then(permission => {
        res.json(permission)
    }).catch(err => {
        res.json({
            data: false,
            message: 'err ' + err
        })
    })
}

const find = (req, res, next) => {
    PERMISSIONSCHEMA.find().then(permission => {
        res.json(permission)
    }).catch(err => {
        res.json({
            data: false,
            message: 'err ' + err
        })
    })
}

const findOne = (req, res, next) => {
    PERMISSIONSCHEMA.findOne(req.params.permissionId).then(permission => {
        res.json(permission)
    }).catch(err => {
        res.json({
            data: false,
            message: 'err ' + err
        })
    })
}

const finduserBypermission = (req, res, next) => {
    PERMISSIONSCHEMA.find({ _id: req.params.permissionId }).populate('user').then(permission => {
        res.json(permission)
    }).catch(err => {
        res.json({
            data: false,
            message: 'err ' + err
        })
    })
}


module.exports = {
    create: create,
    find: find,
    findOne: findOne,
    finduserBypermission: finduserBypermission
}