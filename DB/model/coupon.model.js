import { model, Schema, Types } from "mongoose";

const couponSchema = new Schema({
    code:{type:String,required:true,unique:true},
    amount : {type:Number,required:true,min:0,max:100},
    numofUses:{type:Number, default:1},
    createdBy:{type:Types.ObjectId,ref:'User',required:true},
    UsedBy:[{ type: Types.ObjectId, ref: 'User'}],
}
,
{
    timestamps:true,
}
)

<<<<<<< HEAD:DB/model/coupon.model.js
export const couponModel = model('Coupon',couponSchema)
=======
export const couponModel = model('Coupon',couponSchema)
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/DB/model/coupon.model.js
