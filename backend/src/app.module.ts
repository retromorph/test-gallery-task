import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CustomerModule } from './customer/customer.module';
import { MasterpieceModule } from './masterpiece/masterpiece.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    // Да, я не храню пароли в отдельном файлике под гитигнором ((, но в тестовом примере это неважно, имхо
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "ec2-54-170-163-224.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "jzyjwxgfuzxwqi",
      password: "8222ad23f6fd6e7d76f0125cc32b7f39ae5404e04ee7252f5de11b601ef5ae28",
      database: "dbl6eui170s81b",
      entities: [],
      synchronize: true,
    }),
    CustomerModule,
    MasterpieceModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
