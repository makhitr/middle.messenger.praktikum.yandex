import isArray from "./isArray";
import isPlainObject, { PlainObject } from "./isPlainObject";

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export default isArrayOrObject;
