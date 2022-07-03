/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return param === 'posts' || param === 'projects';
}