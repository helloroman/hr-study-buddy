import { groups } from 'mocks/handlers/groups';
import { students } from 'mocks/handlers/students';
import { auth } from 'mocks/handlers/auth';

export const handlers = [...groups, ...students, ...auth];
