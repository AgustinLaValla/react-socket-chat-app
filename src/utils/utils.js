export const url = 'http://localhost:4000';

export const parseLocation = (location) => location.search.substr(1).split('&').reduce((acc, value) => {
    const pairs = value.split('=');
    acc[pairs[0]] = pairs[1];
    return acc;
}, {});