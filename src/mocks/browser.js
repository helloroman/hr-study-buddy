import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { db } from 'mocks/db';
import { drop } from '@mswjs/data';

export const worker = setupWorker(...handlers);

const mocks = {
  seed: () => {
    for (let i = 0; i < 15; i++) {
      db.student.create();
    }
    return db.student.getAll();
  },
  getStudents: () => db.student.getAll(),
  drop: () => drop(db),
};

mocks.seed();

window.mocks = mocks;
