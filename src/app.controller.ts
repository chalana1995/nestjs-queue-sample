import { Controller, Delete, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FileProducerService } from './file.producer.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private messageProducerService: MessageProducerService, private fileProducerService: FileProducerService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  async sendMessage(@Query('msg') msg: string) {
    await this.messageProducerService.sendMessage(msg);
    return msg;
  }

  @Get('delete-file')
  async deleteFile(@Query('fileName') fileName: string)
  {
     await this.fileProducerService.deleteFile(fileName);
     return 'delete';
  }

}
