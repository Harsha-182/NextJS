import { notFound } from "next/navigation";

const ProductReview = async({
	params
}: {
	params: Promise<{productId: string; reviewId: string}>
}) => {
	const {reviewId, productId} = await params;

	if(parseInt(reviewId) > 1000) {
		notFound();
	}

	return(
		<div>
			<h1>Review {reviewId} from product {productId} </h1>
		</div>
	)
}

export default ProductReview;