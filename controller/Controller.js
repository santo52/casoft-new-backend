"use strict";

const { toJSON, toObjectID } = require('../utils/functions')

class Controller {

  constructor(Model) {
    if (!this.Model) {
      this.Model = Model.model()
    }

    this.getAll = this.getAll.bind(this)
    this.get = this.get.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.create = this.create.bind(this)
  }

  async getAll(req, res) {
    const filter = toJSON(req.body.filter) || { deleted: false }
    const data = await this.Model.find(filter) || {}
    res.status(200).send({ data })
  }

  get(req, res) {
    const filter = toJSON(req.body.filter) || {}
    const _id = toObjectID(req.params.id)

    this.Model.findOne({ $and: [{ _id }, { ...filter }] }, (err, model) => {

      if (!model) return res.status(200).send({ data: {} })
      const data = model._doc || model
      return res.status(200).send({ data })
    })
  }

  update(req, res) {

    if (!req.body.data) {
      return res.status(400).send({ data: {} })
    }

    const data = toJSON(req.body.data)
    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { ...data }, (err, model) => {

      this.Model.findById(_id, (err, model) => {

        if (!model) return res.status(200).send({ data: {} })
        const data = model._doc || model
        return res.status(200).send({ data })

      })
    })
  }

  delete(req, res) {
    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { deleted: true }, (err, model) => {

      this.Model.findById(_id, (err, model) => {

        if (!model) return res.status(200).send({ data: {} })
        const data = model._doc || model
        return res.status(200).send({ data })

      })
    })
  }

  create(req, res) {

    if (!req.body.data) {
      return res.status(400).send({ data: {} })
    }

    this.Model.create(toJSON(req.body.data), (err, model) => {
      if (err) return res.status(400).send({ ...err })
      const data = model._doc || model
      return res.status(200).send({ data })
    })
  }

}

module.exports = Controller;