import Link from "next/link"

export default function f1() {
	return (
		<div>
			<h1>F1 Page</h1>
			<div>
				<Link href={"/f1/f2"}>F2</Link>
			</div>
			<div>
				<Link href={"/f3"}>F3</Link>
			</div>
		</div>
	)
}