const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('producto', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },

        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull:false
        },

   
        
    },
    { timestamps: false }
    );
};