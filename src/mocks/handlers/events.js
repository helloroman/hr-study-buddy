import { rest } from 'msw';
import { db } from 'mocks/db';

export const events = [
  rest.get('/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ events: db.event.getAll() }));
  }),
  rest.get('/events/:group', (req, res, ctx) => {
    if (req.params.group) {
      console.log('group param', req.params.group);
      const matchingEvents = db.event.findMany({
        where: {
          group: {
            equals: req.params.group,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          events: matchingEvents,
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
