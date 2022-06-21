# starter-nodejs

Boilerplate code to kick-start projects in [Node.js](https://nodejs.org/), includes an HTTP layer ([Express](https://expressjs.com/)), database layer ([Sequelize](https://sequelize.org/)), job queue ([Bull](https://optimalbits.github.io/bull/)) and task scheduler ([node-schedule](https://www.npmjs.com/package/node-schedule)) along with a [Dockerfile](https://docs.docker.com/engine/reference/builder/) for production and [docker-compose](https://docs.docker.com/compose/) config for development.

In addition, it also includes CI pipelines configuration to build and publish Docker images for major hosted CI services including [Azure DevOps](https://azure.microsoft.com/en-in/services/devops/), [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines), [Github Actions](https://github.com/features/actions) and [Travis CI](https://www.travis-ci.com/).

## What's included?

- [Bull](https://optimalbits.github.io/bull/) job queue
- Cron-style [task scheduler](https://www.npmjs.com/package/node-schedule)
- [Elasticsearch](https://www.elastic.co/elastic-stack/) server (running on [9200](http://localhost:9200/) and `9300` ports)
- [Express](https://expressjs.com/) app (running on [3000](http://localhost:3000/) port)
- [MailHog](https://github.com/mailhog/MailHog) server (running on `1025` and [8025](http://localhost:8025/) ports)
- [MariaDB](https://mariadb.org/) server (running on `3306` port)
- [phpMyAdmin](https://www.phpmyadmin.net/) console (running on [8000](http://localhost:8000/) port)
- [Redis](https://redis.io/) server (running on `6379` port)
- [MinIO](https://min.io/) server (running on [9000](http://localhost:9000/) and `8900` ports)

## How to use?

First make sure you have [Docker](https://www.docker.com/) installed on your workstation.
To run the project, just clone or download the repository and run below command in project directory:

```shell
docker-compose up -d
```

If you wish to install new packages or run any command inside the [Docker](https://www.docker.com/)  container, run below command:

```shell
docker-compose exec app sh

# run a command e.g., test cases
npm test
```

## License

See [LICENSE](LICENSE) file.
