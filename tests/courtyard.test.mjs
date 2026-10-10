import test from 'node:test';
import assert from 'node:assert/strict';
import { courtyardGeometry } from '../src/lib/courtyard.ts';

test('default drawing has a quarter-site courtyard and five identical floors', () => {
  assert.deepEqual(courtyardGeometry(20, 5), { openArea: 400, footprint: 1200, depth: 10, coverage: 75, floorArea: 6000, far: 3.75 });
});
test('every slider combination conserves site area and produces a positive ring', () => {
  for (let court = 12; court <= 28; court++) {
    for (let floors = 3; floors <= 7; floors++) {
      const model = courtyardGeometry(court, floors);
      assert.equal(model.openArea + model.footprint, 1600);
      assert.ok(model.depth > 0);
      assert.equal(model.far, model.floorArea / 1600);
    }
  }
});
test('a wider court trades floor area for open space; floors do not alter the footprint', () => {
  const small = courtyardGeometry(12, 3), large = courtyardGeometry(28, 3), taller = courtyardGeometry(28, 7);
  assert.ok(large.openArea > small.openArea);
  assert.ok(large.floorArea < small.floorArea);
  assert.equal(large.openArea, taller.openArea);
  assert.equal(large.footprint, taller.footprint);
  assert.ok(taller.floorArea > large.floorArea);
});
test('invalid geometry cannot report a plausible-looking result', () => {
  for (const args of [[0,5],[40,5],[-1,5],[20,0],[20,3.5],[NaN,5],[20,Infinity],[20,5,0],[20,5,15]]) {
    assert.throws(() => courtyardGeometry(...args), RangeError);
  }
});
