'use client';

import { usePathname } from 'next/navigation';

const ReviewNotFound = () => {
	const pathName = usePathname();
	const productId = pathName.split('/')[2];
	const reviewId = pathName.split('/')[4]

	return(
		<div>
			Review {reviewId} Not - found for product {productId}
		</div>
	)
}

export default ReviewNotFound