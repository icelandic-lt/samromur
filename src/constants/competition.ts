import { AgeStat, GenderStat } from '../types/competition';
import { TimelineStat } from '../types/stats';

//TODO: update dates
export const startTime = new Date(2021, 10, 8, 0, 0, 0, 0);
export const lastDay = new Date(2021, 10, 16, 0, 0, 0);
export const endTime = new Date(2021, 10, 17, 0, 0, 0);
export const signUpStart = new Date(2021, 10, 1, 0, 0, 0);

export const defaultTimeline: TimelineStat[] = [
    { date: '2021-11-08', count: 0 },
    { date: '2021-11-09', count: 0 },
    { date: '2021-11-10', count: 0 },
    { date: '2021-11-11', count: 0 },
    { date: '2021-11-12', count: 0 },
    { date: '2021-11-13', count: 0 },
    { date: '2021-11-14', count: 0 },
    { date: '2021-11-15', count: 0 },
    { date: '2021-11-16', count: 0 },
];

export const defaultGenderStats: GenderStat[] = [
    { gender: 'kona', count: 0 },
    { gender: 'karl', count: 0 },
    { gender: 'annad', count: 0 },
];

export const defaultAgeStats: AgeStat[] = [
    { age: '0-9 ára', count: 0 },
    { age: '10-19 ára', count: 0 },
    { age: '20-29 ára', count: 0 },
    { age: '30-39 ára', count: 0 },
    { age: '40-49 ára', count: 0 },
    { age: '50-59 ára', count: 0 },
    { age: '60-69 ára', count: 0 },
    { age: '70-79 ára', count: 0 },
    { age: '80-89 ára', count: 0 },
    { age: '90+ ára', count: 0 },
];
