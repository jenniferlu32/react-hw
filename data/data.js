const { Sequelize, STRING, INTEGER, Model, BOOLEAN } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_hw', {logging: false});

class Task extends Model {};
Task.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task: {
    type: STRING,
  },
  day: {
    type: STRING,
  },
  time: {
    type: STRING,
  },
  important: {
    type: BOOLEAN
  }
}, { timestamps: false,sequelize: db, modelName: 'tasks' });

const seed = async() => {
  try {
    await db.sync({ force: true });
    console.log('data seeded!');
    await Promise.all(
      [
        ['Laundry', 'Sunday', '8:30am', true],
        ['Call Erica', 'Saturday', '8:00pm', true],
        ['React Hw', 'Saturday', '12:00am', false]
      ].map(([task, day, time, important]) => Task.create({ task, day, time, important }))
    )
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  db, Task, seed
}
