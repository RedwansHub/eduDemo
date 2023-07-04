import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcryptjs'
import { signJWTAccessToken } from "@/app/lib/jwt";

interface RequestBody {
    username: string;
    password: string;
}

export async function POST(request : Request) {
    
    const body:RequestBody = await request.json();
    const user = await prisma.user.findFirst({
        where:{
            email:body.username,
            }
    })
   
    if (!user) {
        return new NextResponse("User not found", { status: 401 });
    }

    if (!user.hashedPassword) {
        return new NextResponse("Invalid password", { status: 401 });
    }

    const validPassword = await bcrypt.compare(body.password, user.hashedPassword);

    if (!validPassword) {
        return new NextResponse("Invalid password", { status: 401 });
    }

    if(user && validPassword) {
        const { hashedPassword, ...userWithoutPass } = user;
        const accessToken = signJWTAccessToken(userWithoutPass)
        const result = {
         ...userWithoutPass,
         accessToken,   
        };
        return new NextResponse(JSON.stringify(result))
    } else  return new NextResponse(JSON.stringify(null))


}