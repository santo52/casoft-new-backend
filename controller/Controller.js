"use strict";

const { toJSON, toObjectID } = require('../utils/functions')

class Controller {

  constructor(Model) {

    if (!this.Model) {  
      this.Model = Model.model()
      this.logicDelete = !!Model.schema().obj.deleted
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

    const data = toJSON(req.body.data)    

    if (!data) {
      return res.status(400).send({ data: {} })
    }

    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { ...data }, (err, model) => {

      this.Model.findById(_id, (err, model) => {

        if (!model) return res.status(400).send({ data: {} })
        const data = model._doc || model
        return res.status(200).send({ data })

      })
    })
  }

  async delete(req, res) {
    const _id = toObjectID(req.params.id)
    const filter = toJSON(req.body.filter) || {}

    if(this.logicDelete) {
      
      this.Model.updateOne({ $and: [{ _id }, { ...filter }] }, { deleted: true }, (err, model) => {

        this.Model.findById(_id, (err, model) => {
  
          if (!model) return res.status(200).send({ data: {} })
          const data = model._doc || model
          return res.status(200).send({ data })

        })
      })

    } else {

      const data = await this.Model.findOne({ $and: [{ _id }, { ...filter }] })
      if(!data){ return res.status(200).send({ data: {} }) }

      await this.Model.deleteOne({ $and: [{ _id }, { ...filter }] })
      return res.status(200).send({ data })

    }
  }

  create(req, res) {

    const data = toJSON(req.body.data)
    if (!data) {
      return res.status(400).send({ data: {} })
    }

    this.Model.create(data, (err, model) => {
      if (err) return res.status(400).send({ ...err })
      const data = model._doc || model
      return res.status(200).send({ data })
    })
  }

}

module.exports = Controller;