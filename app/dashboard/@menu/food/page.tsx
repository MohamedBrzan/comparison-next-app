import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function FoodPage() {
	return (
		<Card className='w-full flex-1 flex-col justify-evenly items-center flex bg-orange-200'>
			<h1>This another route for food page.</h1>
			<div className='link'>
				<Link href='/dashboard' className='hover:text-blue-600 underline'>
					Back to Menu Page
				</Link>
			</div>
		</Card>
	);
}
