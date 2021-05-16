import { rest } from 'msw';
import { db } from 'mocks/db';

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups: db.group.getAll() }));
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.id,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: 'Please provide the group ID',
      })
    );
  }),
];
