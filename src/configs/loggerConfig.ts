const defaultPinoConfig = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname,reqId,responseTime,req,res',
    },
  },
}

const loggerConfig = {
  local: defaultPinoConfig,
  dev: defaultPinoConfig,
  prod: true,
  test: false,
}

export default loggerConfig
