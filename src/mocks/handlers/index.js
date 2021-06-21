import { groups } from 'mocks/handlers/groups';
import { students } from 'mocks/handlers/students';
import { auth } from 'mocks/handlers/auth';
import { events } from 'mocks/handlers/events';

export const handlers = [...groups, ...students, ...auth, ...events];
