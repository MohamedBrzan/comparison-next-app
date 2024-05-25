import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function MenuPage() {
	return (
		<Card className='w-full flex-1 flex-col justify-evenly items-center flex bg-gray-300'>
			<h1>Menu page.</h1>
			<div className='link'>
				<Link href='/dashboard/food' className='hover:text-blue-600 underline'>
					Go to Food Page
				</Link>
			</div>
		</Card>
	);
}
