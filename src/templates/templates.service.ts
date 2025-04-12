import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from './entities/template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(Template)
    private TemplateRepo: Repository<Template>,
  ) {
    this.insertDummyData(); // Auto-insert on startup (for demo)
  }

  async insertDummyData() {
    const count = await this.TemplateRepo.count();
    if (count === 0) {
      await this.TemplateRepo.save([
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
      ]);
    }
  }

  findAll() {
    return this.TemplateRepo.find();
  }
}
