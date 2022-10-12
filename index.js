#! /usr/bin/env node
import { Command } from 'commander'
import { minutes } from './minutes.js'
import { pomodoro } from './pomodoro.js'

const program = new Command()

program.name('matolink timer').description('simple timer to track time use')

program
  .command('start')
  .description('start a timer with the given number as interval in minutes')
  .argument('<int>', 'interval size')
  .action((num) => {
    minutes(num)
  })

program
  .command('pomodoro')
  .description('start a timer with the pomodoro timers!')
  .action(() => {
    pomodoro(25)
  })

program.parse()
