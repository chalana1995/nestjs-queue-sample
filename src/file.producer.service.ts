import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";



@Injectable()
export class FileProducerService{
    
constructor(@InjectQueue('file-operation') private queue: Queue) {}


async deleteFile(fileName: string){
    
    // local machine file path
    //let filePath =  folder path  eg :-  `C:/Users/PC/testimage/${fileName}.jpg`;

    await this.queue.add('delete-file', {
        path: filePath
    },{delay: 10000})
}

}