import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookie = cookies();
    if (!cookie.has('user_id')) {
        return NextResponse.json({
            message: 'No cart found.'
        })
    }
    try {
        const res = await db
        .select()
        .from(cartTable)
        .where(
            eq(cartTable.user_id, Number(cookie.get('user_id'))
        ));
        return NextResponse.json({ res });
    } catch (error) {
        return NextResponse.json({ error })
    }
}


