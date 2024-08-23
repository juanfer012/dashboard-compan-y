import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {userId} = auth();
        const data = await req.json();

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const company = await db.company.create({
            data:{
                userId,
                ...data
            },
        });

        return NextResponse.json(company);
    } catch (error) {
        console.log("[COMPANY]", error);
        return new NextResponse("Internal Error", {status: 500})
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { companyId: string } }
  ) {
    try {
      const { userId } = auth();
      const { companyId } = params;
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      const deletedCompany = await db.company.delete({
        where: {
          id: companyId,
        },
      });
  
      return NextResponse.json(deletedCompany);
    } catch (error) {
      console.log("[DELETE COMPANY ID]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }