'use strict';

const Payments = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    value: DataTypes.FLOAT,
    buyerName: DataTypes.STRING,
    cardNumber: DataTypes.BIGINT,
    expirationDate: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    status: DataTypes.STRING,
    transactDate: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'payments',
    timestamps: false,
  });

  return Payments
}

module.exports = Payments
