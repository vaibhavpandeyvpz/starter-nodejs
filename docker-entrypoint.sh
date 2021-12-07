#!/bin/sh

set -e

# from https://github.com/nodejs/docker-node/blob/main/16/alpine3.14/docker-entrypoint.sh
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  set -- node "$@"
fi

# run the migrations
if [ -z "$SKIP_MIGRATIONS" ]; then
  npx sequelize db:migrate
fi

exec "$@"
