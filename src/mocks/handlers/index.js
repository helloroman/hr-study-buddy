import { rest } from 'msw';
import { db } from 'mocks/db';

export const handlers = [
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
  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudent = db.student.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      if (!matchingStudent) {
        return res(
          ctx.status(404),
          ctx.json({
            error: 'No matching student',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudent,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students: db.student.getAll(),
      })
    );
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = db.student.findMany({
      where: {
        name: {
          contains: req.body.searchPhrase,
        },
      },
    });
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
];
