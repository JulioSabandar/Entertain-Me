const TVSerie = require("../models/tvSerie")
class TVController {
  static find(req, res, next){
    TVSerie.find()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static findById(req, res, next){
    TVSerie.findById(req.params.id)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static create(req, res, next){
    TVSerie.create(req.body)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static update(req, res, next){
    TVSerie.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(result)
    })
  }
  static remove(req, res, next){
    TVSerie.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
}

module.exports = TVController
