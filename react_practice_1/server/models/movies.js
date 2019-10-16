'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imdbid: DataTypes.INTEGER
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};