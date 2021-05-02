import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { db } from 'mocks/db';

export const worker = setupWorker(...handlers);

const createStudents = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

createStudents();

window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
};
