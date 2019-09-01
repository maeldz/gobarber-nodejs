"use strict";

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable("appointments", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            date: {
                allowNull: false,
                type: DataTypes.DATE
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: { model: "users", key: "id" },
                onUpdate: "CASCADE",
                allowNull: false
            },
            provider_id: {
                type: DataTypes.INTEGER,
                references: { model: "users", key: "id" },
                onUpdate: "CASCADE",
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable("appointments");
    }
};
