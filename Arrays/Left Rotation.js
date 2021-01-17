// A left rotation operation on an array shifts each of the array's elements  unit to the left.
// For example, if  left rotations are performed on array , then the array would become .
// Note that the lowest index item moves to the highest index in a rotation.
// This is called a circular array.

function rotLeft(a, d) {
    return [...a.slice(d, a.length), ...a.slice(0, d)];
}
