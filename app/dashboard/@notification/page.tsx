import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function NotificationPage() {
	return (
		<Card className='bg-blue-600 w-full flex-1 flex-col justify-evenly items-center flex text-white'>
			Notification Page
			<Link
				href='/dashboard/subscribe'
				className='underline hover:text-orange-300'
			>
				Got to Subscribe Page
			</Link>
		</Card>
	);
}
