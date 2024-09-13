import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifyScalarUI from '@scalar/fastify-api-reference'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { errorHandler } from '@/http/error-handler'
import { authenticateWithPassword } from '@/http/routes/auth/authenticate-with-password'
import { createAccount } from '@/http/routes/auth/create-account'
import { getProfile } from '@/http/routes/auth/get-profile'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Next.js SaaS API',
      description: 'Full-stack SaaS app with multi-tenant & RBAC',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifyScalarUI, {
  routePrefix: '/docs',
  configuration: {
    spec: {
      content: () => app.swagger(),
    },
  },
})

app.register(fastifyJwt, {
  secret: 'my-jwt-secret',
})

app.register(fastifyCors)

app.register(createAccount)
app.register(authenticateWithPassword)
app.register(getProfile)

app.listen({ port: 3333 }).then(() => {
  console.log('Server listening on port 3333')
})
