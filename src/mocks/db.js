import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const getGroupName = () => groups[Math.floor(Math.random() * groups.length)];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: getRandomAverage,
    group: getGroupName,
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverage(),
      },
    ],
  },
});
