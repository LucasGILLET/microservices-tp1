import { Test, TestingModule } from '@nestjs/testing';
import { HelloServiceController } from './hello-service.controller';
import { HelloServiceService } from './hello-service.service';

describe('HelloServiceController', () => {
  let helloServiceController: HelloServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloServiceController],
      providers: [HelloServiceService],
    }).compile();

    helloServiceController = app.get<HelloServiceController>(HelloServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(helloServiceController.getHello()).toBe('Hello World!');
    });
  });
});
