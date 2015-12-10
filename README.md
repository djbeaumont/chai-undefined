```
chai-undefined (master) $ npm test

> chai-undefined@1.0.0 test /Users/david.beaumont/scratch/chai-undefined
> mocha -r mocha_setup.js test.js



  undefined test
    when using dirty chai
      1) should fail an undefined expect
    when using normal chai
      ✓ should fail an undefined expect 


  1 passing (7ms)
  1 failing

  1) undefined test when using dirty chai should fail an undefined expect:
     TypeError: undefined is not a spy or a call to a spy!
      at assertCanWorkWith (/Users/david.beaumont/scratch/chai-undefined/node_modules/sinon-chai/lib/sinon-chai.js:43:19)
      at Assertion.<anonymous> (/Users/david.beaumont/scratch/chai-undefined/node_modules/sinon-chai/lib/sinon-chai.js:70:13)
      at execDeferred (/Users/david.beaumont/scratch/chai-undefined/node_modules/dirty-chai/lib/dirty-chai.js:43:29)
      at Assertion.newMethod (/Users/david.beaumont/scratch/chai-undefined/node_modules/dirty-chai/lib/dirty-chai.js:68:18)
      at Assertion.assert (/Users/david.beaumont/scratch/chai-undefined/node_modules/chai/lib/chai/utils/addChainableMethod.js:83:49)
      at Context.<anonymous> (/Users/david.beaumont/scratch/chai-undefined/test.js:7:38)
      at callFn (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runnable.js:250:21)
      at Test.Runnable.run (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runnable.js:243:7)
      at Runner.runTest (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:373:10)
      at /Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:451:12
      at next (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:298:14)
      at /Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:308:7
      at next (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:246:23)
      at Object._onImmediate (/Users/david.beaumont/scratch/chai-undefined/node_modules/mocha/lib/runner.js:275:5)
      at processImmediate [as _immediateCallback] (timers.js:336:15)
```
