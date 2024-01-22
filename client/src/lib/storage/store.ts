import { writable } from 'svelte/store';

export const location = writable('start');

export const gameType = writable('host');

export const userName = writable('');
