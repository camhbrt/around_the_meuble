// module.exports = (sequelize, Sequelize) => {
//     const UserFav = sequelize.define("userfav", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true 
//         },

//         user_id: {
//             type: Sequelize.INTEGER,
//             references : {
//                 model: 'users',
//                 key: 'id'
//             }
//         },

//         meuble_id: {
//             type: Sequelize.INTEGER,
//             references : {
//                 model: 'meubles',
//                 key: 'id'
//             }
//         },
//     }, {
//         timestamps: false
//     })
//         return UserFav;
// }