import {
  MercuriusGatewayDriver,
  MercuriusGatewayDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      graphiql: true,
      driver: MercuriusGatewayDriver,
      federationMetadata: true,
      gateway: {
        services: [
          { name: 'users', url: 'http://localhost:3002/graphql' },
          { name: 'posts', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
