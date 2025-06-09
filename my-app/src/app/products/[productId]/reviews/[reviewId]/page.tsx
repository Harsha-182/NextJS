import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}

const ProductReview = async({
	params
}: {
	params: Promise<{productId: string; reviewId: string}>
}) => {
	// const random = getRandomInt(2);
	// if(random === 1)
	// 	throw new Error("Error loading review");

	const {reviewId, productId} = await params;

	if(parseInt(reviewId) > 1000) {
		// notFound();
		redirect('/home')
	}

	return(
		<div>
			<h1>Review {reviewId} from product {productId} </h1>
		</div>
	)
}

export default ProductReview;