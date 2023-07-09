import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookie = cookies();
    const getUserId = cookie.get('user_id')?.value; 
    console.log(getUserId);
    
    
    if (!getUserId) {
        return NextResponse.json({
            items_count: 0
        })
    } else {
        const [{ items_count }] = await db.select({
            items_count: cartTable.items_count
        }).from(cartTable).where(eq(cartTable.user_id, Number(getUserId)))
        return NextResponse.json({ items_count })
    }
}