var test = require('tape');
var sandbox = require('@architect/sandbox');
var AWS =  require('aws-sdk');

// start the sandbox

test('sandbox.start', async (t) => {
  t.plan(1);
  await sandbox.start();
  t.ok(true, 'started');
});

// finally sandbox.end so we cleanly exit the test

test('sandbox.end', async (t) => {
  t.plan(1);
  await sandbox.end();
  t.ok(true, 'closed');
});
