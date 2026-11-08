
/* global describe, test, expect */
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes words', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });
});

describe('filterActiveUsers', () => {
    test('keeps only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
        ]);
    });

    test('returns empty array when all inactive', () => {
        expect(filterActiveUsers([{ name: 'Bob', isActive: false }])).toEqual([]);
    });

    test('returns empty array for empty input', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('creates log message', () => {
        const result = logAction('login', 'Alice');
        expect(result).toContain('User Alice performed login at');
    });

    test('handles empty strings', () => {
        const result = logAction('', '');
        expect(result).toContain('User');
    });
});