export function prevent(e, cb) {
    e.preventDefault();
    return cb();
}