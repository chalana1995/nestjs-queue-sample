import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";



@Injectable()
export class FileProducerService{
    
constructor(@InjectQueue('file-operation') private queue: Queue) {}


async deleteFile(fileName: string){
    
    // localmachine file path
    let filePath = `C:/Users/PC/Videos/testimage/${fileName}.jpg`;

    await this.queue.add('delete-file', {
        path: filePath
    },{delay: 10000})
}

}