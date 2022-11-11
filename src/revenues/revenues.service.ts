import { Injectable } from '@nestjs/common';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Revenue, RevenueSchema } from './entities/revenue.entity';
import { Model } from 'mongoose';

@Injectable()
export class RevenuesService {
  constructor(
    @InjectModel(Revenue.name) private revenuesModel: Model<Revenue>,
  ) { }

  async create(createRevenueDto: CreateRevenueDto) {
    const resp = new this.revenuesModel(createRevenueDto);
    return resp.save();
  }

  async findAll() {
    return this.revenuesModel.find().exec();
  }

  async findOne(id: string) {
    return this.revenuesModel.findById(id).exec();
  }

  async update(id: string, updateRevenueDto: UpdateRevenueDto) {
    const resp = this.revenuesModel
      .findByIdAndUpdate(id, updateRevenueDto)
      .exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    const resp = await this.revenuesModel.findOneAndDelete({ _id: id });
    return (await resp).remove();
  }
}
