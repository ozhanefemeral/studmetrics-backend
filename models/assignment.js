'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    mark: DataTypes.DECIMAL(10, 2),
    answers: DataTypes.ARRAY(DataTypes.JSON),
    isCorrect: DataTypes.ARRAY(DataTypes.BOOLEAN),
    points: { type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), defaultValue: [].fill(0) },
    isAnswered: { type: DataTypes.BOOLEAN, defaultValue: false },
    isReviewed: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    hooks: {
      afterSave: async (assignment, options) => {
        const homework = await assignment.getHomework()
        const assignments = await homework.getAssignments({ attributes: ['mark'] })

        let sum = 0;

        assignments.forEach(element => {
          sum += parseFloat(element.mark);
        })

        homework.average = sum / assignments.length;
        homework.save()
      }
    }
  });
  Assignment.associate = function (models) {
    Assignment.belongsTo(models.Homework, {
      foreignKey: "homeworkId"
    })
    Assignment.belongsTo(models.Student, {
      foreignKey: "studentId"
    })
    Assignment.belongsTo(models.Enrolled, {
      foreignKey: "enrolledId"
    })
  };
  return Assignment;
};