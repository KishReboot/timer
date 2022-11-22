/* Implement an alarm clock / timer which will beep after a specified amount of 
 * time has passed. The user can specify an unlimited number of alarms using 
 * command line arguments
 * 
 * process.argv.slice(2)
 * 
 * make it beep at:
 * 3 seconds 3000
 * 5 seconds 5000
 * 9 seconds 9000
 * 10 seconds 10000
 * 15 seconds 15000
 * 
 * process.stdout.write('\x07');
 * If it's not working, we can switch to sending a visible character like "." 
 * to stdout.
 * 
 * 
 * Create variables; process.argv, for input, and for the beepbeep
 * similar to typewriter and spinner logic
 * use for of (arg of args)
 * Using arg alone for the time doesnt work work, have to multiply by 1000
 * ex: 1000 * 10 = 10000, 1000 * 3 = 3000 (ms converison duh)
 * 
 * Possible to use map() method I believe
 * 
 * Edge Cases
 * No numbers are provided: Easy. It should just not beep at all and end
 * immediately since no beeps should get scheduled.
 * 
 * Doesn't it already not show anything and end if no input?
 * 
 * An input is a negative number: Ignore/skip any numbers that are negative
 * We can't schedule anything in the past. 
 * 
 * if arg is less then 0, skip/continue;
 * 
 * An input is not a number: Ignore/skip these as well, instead of attempting
 * to call setTimeout with a non-number.
 * 
 * if arg is not a number, skip/continue; (skip/keeps going through code)
 */

const args = process.argv.slice(2);
let beep = '\x07';

const timer = function (args) {

  for (const arg of args) {

    if (isNaN(arg)) continue;

    if (arg < 0) continue;

    setTimeout(() => {

    process.stdout.write('BEEP \x07 \n');

    }, 1000 * arg);
  }
};

timer(args);