import { NextResponse } from 'next/server';
import Stripe from 'stripe';

interface Items {
    image: {
        asset: {
            _ref: string;
        }
    }[]
    name: string;
    price: number;
    quantity: number;
}

export async function POST(request: Request) {
    const stripe = new Stripe(
        process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!,
        { apiVersion: '2022-11-15' }
    );

    const items: Items[] = await request.json();
    const origin = request.headers.get('origin')

    try {
        const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1NSBPvKmBCJCgjT69zWiLpPz' },
                { shipping_rate: 'shr_1NSBQUKmBCJCgjT6FUJTqdrl' }
            ],
            line_items: items.map((item) => {
                const img = item.image[0].asset._ref;
                const newImage = img.replace(
                    'image-',
                    `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`
                ).replace('-png', '.png');
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${origin}/pay-success`,
            cancel_url: `${origin}/pay-canceled`
        }
        const session = await stripe.checkout.sessions.create(params);
        return NextResponse.json({
            session
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            error
        }, { status: 500 })
    }
}
