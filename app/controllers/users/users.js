const USER = require('../../models/user.model');
const queryBuilder = require('../../helper/query.builder');
const PERMISSIONSCHEMA = require('../../models/permissions.model')
const create = (req, res, next) => {
    const user = new USER({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    user.save().then((data) => {
        res.send({
            message: 'user created',
            data: data
        })
    }).catch(err => {
        res.json({
            message: 'fail to create user',
            err: err
        });
    })
}

const find = (req, res, next) => {
    USER.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            message: 'fail to find users',
            err: err
        })
    })
}


const findById = (req, res, next) => {
    USER.findById(req.params.userId).then(data => {
        if (!data) {
            res.status(200).json({ message: 'no data found' })
        } else {
            res.json(data);
        }
    }).catch(err => {
        res.json({
            message: 'fail to find user',
            err: err
        })
    })
}


const custom = (req, res, next) => {
    let query = queryBuilder(req, res, next);
    USER.find(query).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            message: 'fail to find user',
            err: err
        })
    })
}

const findupdate = (req, res, next) => {
    USER.findByIdAndUpdate(req.params.userId).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            message: 'fail to find user',
            err: err
        })
    })
}


const permissionsCreate = async (req, res, next) => {
    const newPermission = new PERMISSIONSCHEMA(req.body)
    const user = await USER.findById(req.params.userId);
    user.peremissions.push(newPermission._id);
    await user.save();
    await newPermission.save();
    res.status(201).json(user)
}

const getBypermissions = (req, res, next) => {
    USER.findById(req.params.userId).populate('peremissions').then(data => {
        res.status(201).json(data)
    }).catch(err => {
        res.json({
            message: false,
            err: err
        })
    });
}


module.exports = {
    create: create,
    find: find,
    findById: findById,
    custom: custom,
    permissionsCreate: permissionsCreate,
    getBypermissions: getBypermissions
}