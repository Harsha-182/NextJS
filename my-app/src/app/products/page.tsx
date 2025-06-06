import Link from "next/link"

const ProductList = () => {
	let productId = 100;
	return(
		<div>
			<Link href='/home'>Home</Link>
			<h1>Product List</h1>
			<h2><Link href='/products/2'>Product 2</Link></h2>
			<h2><Link href='/products/3' replace>Product 3</Link></h2>
			<h2><Link href={`/products/${100}`}>Product {productId}</Link></h2>
		</div>
	)
}

export default ProductList