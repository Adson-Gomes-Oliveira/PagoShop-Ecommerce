'use strict';

module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    value: DataTypes.INTEGER,
    buyerName: DataTypes.STRING,
    cardNumber: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    status: DataTypes.STRING,
    transactDate: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'payments',
    timestamps: false,
  });

  return Payments;
}