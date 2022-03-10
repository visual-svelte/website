"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutRunnerError = exports.TimeoutRunner = exports.ManualPromise = void 0;
exports.raceAgainstTimeout = raceAgainstTimeout;

var _utils = require("./utils");

let _Symbol$species, _Symbol$toStringTag;

class TimeoutRunnerError extends Error {}

exports.TimeoutRunnerError = TimeoutRunnerError;

class TimeoutRunner {
  constructor(timeout) {
    this._running = void 0;
    this._timeout = void 0;
    this._elapsed = void 0;
    this._timeout = timeout;
    this._elapsed = 0;
  }

  async run(cb) {
    const running = this._running = {
      start: (0, _utils.monotonicTime)(),
      timer: undefined,
      timeoutPromise: new ManualPromise()
    };

    try {
      const resultPromise = Promise.race([cb(), running.timeoutPromise]);

      this._updateTimeout(running, this._timeout);

      return await resultPromise;
    } finally {
      this._elapsed += (0, _utils.monotonicTime)() - running.start;

      this._updateTimeout(running, 0);

      if (this._running === running) this._running = undefined;
    }
  }

  interrupt() {
    if (this._running) this._updateTimeout(this._running, -1);
  }

  updateTimeout(timeout) {
    this._timeout = timeout;
    if (this._running) this._updateTimeout(this._running, timeout);
  }

  resetTimeout(timeout) {
    this._elapsed = 0;
    this.updateTimeout(timeout);
  }

  _updateTimeout(running, timeout) {
    if (running.timer) {
      clearTimeout(running.timer);
      running.timer = undefined;
    }

    if (timeout === 0) return;

    const elapsed = (0, _utils.monotonicTime)() - running.start + this._elapsed;

    timeout = timeout - elapsed;
    if (timeout <= 0) running.timeoutPromise.reject(new TimeoutRunnerError());else running.timer = setTimeout(() => running.timeoutPromise.reject(new TimeoutRunnerError()), timeout);
  }

}

exports.TimeoutRunner = TimeoutRunner;

async function raceAgainstTimeout(cb, timeout) {
  const runner = new TimeoutRunner(timeout);

  try {
    return {
      result: await runner.run(cb),
      timedOut: false
    };
  } catch (e) {
    if (e instanceof TimeoutRunnerError) return {
      timedOut: true
    };
    throw e;
  }
}

_Symbol$species = Symbol.species;
_Symbol$toStringTag = Symbol.toStringTag;

class ManualPromise extends Promise {
  constructor() {
    let resolve;
    let reject;
    super((f, r) => {
      resolve = f;
      reject = r;
    });
    this._resolve = void 0;
    this._reject = void 0;
    this._isDone = void 0;
    this._isDone = false;
    this._resolve = resolve;
    this._reject = reject;
  }

  isDone() {
    return this._isDone;
  }

  resolve(t) {
    this._isDone = true;

    this._resolve(t);
  }

  reject(e) {
    this._isDone = true;

    this._reject(e);
  }

  static get [_Symbol$species]() {
    return Promise;
  }

  get [_Symbol$toStringTag]() {
    return 'ManualPromise';
  }

}

exports.ManualPromise = ManualPromise;