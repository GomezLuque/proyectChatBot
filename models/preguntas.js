'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class preguntas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.respuestas, {foreignKey:'idPregunta', as: 'respuestas'})
    }
  };
  preguntas.init({
    pregunta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'preguntas',
  });
  return preguntas;
};