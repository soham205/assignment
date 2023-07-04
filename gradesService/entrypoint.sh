#!/bin/sh

# Run migration commands.
npm install
sequelize db:migrate
npm run watch