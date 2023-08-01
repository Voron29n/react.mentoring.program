import { mapRuntimeToString } from 'utils';

describe('mapRuntimeToString helper utils', () => {
  it('mapRuntimeToString with number', () => {
    const runtime = mapRuntimeToString(121);
    expect(runtime).toBe('2h 1min');
  });

  it('mapRuntimeToString with number', () => {
    const runtime = mapRuntimeToString('121');
    expect(runtime).toBe('2h 1min');
  });

  it('mapRuntimeToString with zero', () => {
    const runtime = mapRuntimeToString(0);
    expect(runtime).toBe('0');
  });
});
