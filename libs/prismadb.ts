import {PrismaClient} from '@prisma/client'

declare global{
    var prismaClient : PrismaClient | undefined
}

var client = globalThis.prismaClient || new PrismaClient()
if(process.env.NODE_ENV !== 'production'){
    globalThis.prismaClient = client
}

export default client