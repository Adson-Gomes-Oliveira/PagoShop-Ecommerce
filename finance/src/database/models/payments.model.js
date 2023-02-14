'use strict';
// FLOAT -> DECIMAL(10, 2)
// Validar credit card
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

  Payments.associate = (models) => {
    Payments.hasOne(models.Invoices, {
      as: 'invoices',
      foreignKey: 'payment_id'
    })
  }

  return Payments
}

module.exports = Payments
