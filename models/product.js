module.exports = function(sequelize, DataTypes) {
    const product = sequelize.define('Product', {
        name : {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        seller : {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        description : {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        // 상품이 팔렸는지 안팔렸는지 여부 1과 0으로 
        soldout : {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0,
        },
        type: {
            type : DataTypes.STRING(50),
            allowNull: true,
        },
    });
    return product;
};