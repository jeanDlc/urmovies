/**
 * @example  parsePath('some-path') -> '/some-path'
 * parsePath('/some-path') -> '/some-path'
 *
 */
export default function parsePath(path: string | null) {
  if (path && path[0] === "/") return path;
  return `/${path}`;
}
