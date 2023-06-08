import {prisma} from "@/db";
import {hash} from "bcryptjs"

export default async function  userLogin(){
    return prisma.order.findMany();
}
export async function  userSignup(){
    const user = await prisma.user.create({
        data : {
            username : "user",
            password : await hash("user", 10)
        }
    })
}