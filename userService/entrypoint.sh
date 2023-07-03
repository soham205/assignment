#!/bin/sh

# Run migration commands.

sequelize db:migrate
npm run watch