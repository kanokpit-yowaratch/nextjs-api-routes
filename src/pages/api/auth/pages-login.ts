import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allow' });
	}

	try {
		const { username } = req.body;
		const ckConfig = cookie.serialize(
			'pages-token',
			`fake-${username}-token`, {
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 24, // 24 hrs
			sameSite: 'strict',
			path: '/'
		});

		res.setHeader('Set-Cookie', ckConfig);

		const user = { username };
		res.status(200).json({
			message: 'Test login routing successful.',
			user
		});
	} catch (error: any) {
		res.status(500).json({ message: 'Internal Server Error.' });
	}
}