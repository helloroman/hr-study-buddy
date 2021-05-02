import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const getRandomGroup = (index) => groups[index];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverage(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
    ],
  },
});
