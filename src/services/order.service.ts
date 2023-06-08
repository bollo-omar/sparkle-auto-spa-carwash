import {prisma} from "@/db";
import {Order} from "@prisma/client";

interface CustomerOrder extends Order{}
export async function createOrder(data : CustomerOrder){
    const order = await prisma.order.create({
        data
    })
}
export async function getOrders(){

    return prisma.order.findMany();
}

export async function  getOrderById(id : string){
    return prisma.order.findUnique({
        where : {
            id
        }
    })
}

export async function  getOrderByCustomerId(customerId : string){
    return prisma.order.findFirst({
        where : {
            customerId
        }
    })
}