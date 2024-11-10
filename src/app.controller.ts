import { Controller, Get } from "@nestjs/common";
import { file, gc } from "bun";
import { readFile } from "fs/promises";
import { join } from "path";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  private filePaths = []
  constructor(private readonly appService: AppService) {
    this.filePaths.push(
      join(__dirname, "../files", `1MB.txt`),
      join(__dirname, "../files", `1MB-1.txt`),
      join(__dirname, "../files", `1MB-2.txt`),
      join(__dirname, "../files", `2MB.txt`),
      join(__dirname, "../files", `2MB-1.txt`),
      join(__dirname, "../files", `2MB-2.txt`),
      join(__dirname, "../files", `5MB.txt`),
      join(__dirname, "../files", `5MB-1.txt`),
      join(__dirname, "../files", `5MB-2.txt`),
      join(__dirname, "../files", `10MB.txt`),
      join(__dirname, "../files", `10MB-1.txt`),
      join(__dirname, "../files", `10MB-2.txt`),
      join(__dirname, "../files", `25MB.txt`),
      join(__dirname, "../files", `25MB-1.txt`),
      join(__dirname, "../files", `50MB.txt`),
      join(__dirname, "../files", `512KB.txt`),
      join(__dirname, "../files", `512KB-1.txt`),
      join(__dirname, "../files", `512KB-2.txt`),
      join(__dirname, "../files", `750KB.txt`),
      join(__dirname, "../files", `750KB-1.txt`),
      join(__dirname, "../files", `750KB-2.txt`),
    )
  }

  @Get('node')
  async nodeReadFiles() {
    for (let i = 0; i < this.filePaths.length; i++) {
      const nodeData = await readFile(this.filePaths[i], "utf-8");
      // gc(true);
    }
    return true
  }

  @Get('bun')
  async bunReadFiles() {
    for (let i = 0; i < this.filePaths.length; i++) {
      const bunData = await file(this.filePaths[i], { type: "utf-8" }).text();
      // gc(true);
    }
    return true
  }

  @Get("gc")
  freeMem() {
    gc(true);
  }
}
