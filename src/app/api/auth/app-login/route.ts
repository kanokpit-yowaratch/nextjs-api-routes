import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
	try {
		const { username } = await req.json();

		const cookieStore = await cookies();
		cookieStore.set({
			name: 'api-token',
			value: `fake-${username}-token`,
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 24, // 24 hrs
			sameSite: 'strict',
			path: '/',
		});

		const user = { username };
		const responseData = {
			message: 'Test login routing successful.',
			user
		};
		return NextResponse.json(responseData, {
			status: 200,
		});
	} catch (error: any) {
		return NextResponse.json(
			{ message: 'Internal Server Error.' },
			{ status: 500 }
		);
	}
}
