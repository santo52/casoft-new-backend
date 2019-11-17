const { toJSON, toObjectID } = require('../utils/functions')

var _this = this;

class Controller {

  constructor(Model) {
    _this.Model = Model.model()
  }

  async getAll(req, res) {
    const filter = toJSON(req.body.filter) || { deleted: false }
    const all = await _this.Model.find(filter) || {}
    res.status(200).send({ data: all })
  }

  get(req, res) {
    const filter = toJSON(req.body.filter) || {}
    const _id = toObjectID(req.params.id)

    _this.Model.findOne({ $and: [{ _id }, { ...filter }] }, (err, model) => {

      if(!model) return res.status(200).send({ data: {} })
      const result = model._doc || model
      return res.status(200).send({ data: { ...result } })
    })
  }

  update(req, res) {

    if (!req.body.data) {
      return res.status(400).send({ data: {} })
    }

    const data = toJSON(req.body.data)
    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    _this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { ...data }, (err, model) => {

      _this.Model.findById(_id, (err, model) => {

        if(!model) return res.status(200).send({ data: {} })
        const result = model._doc || model
        return res.status(200).send({ data: { ...result } })

      })
    })
  }

  delete(req, res) {
    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    _this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { deleted: true }, (err, model) => {

      _this.Model.findById(_id, (err, model) => {

        if(!model) return res.status(200).send({ data: {} })
        const result = model._doc || model
        return res.status(200).send({ data: { ...result } })

      })
    })
  }

  restore(req, res) {

    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    _this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { deleted: false }, (err, model) => {

      _this.Model.findById(_id, (err, model) => {

        if(!model) return res.status(200).send({ data: {} })
        const result = model._doc || model
        return res.status(200).send({ data: { ...result } })

      })
    })
  }

  create(req, res) {

    if (!req.body.data) {
      return res.status(400).send({ data: {} })
    }

    _this.Model.create(toJSON(req.body.data), (err, model) => {
      if (err) return res.status(400).send({ ...err })
      return res.status(200).send({ data: { ...model._doc } })
    })
  }

}

module.exports = Controller;