import { useEffect, useState } from "react";

type Data = {
	products: Array<Product>
}
type Product =
	{
		id: number,
		title: string,
		description: string,
		category: string,
		price: number,
		discountPercentage: number,
		rating: number,
		staock: number,
		tags: Array<string>,
		thumbnail: string,
	}

export const Products = () => {
	const [productData, setProductData] = useState<Data>();
	const [productsToShow, setproductsToShow] = useState<Array<Product>>()
	const [searchString, setSearchString] = useState('');
	async function loadData() {
		try {
			const response = await fetch('https://dummyjson.com/products');
			const data: Data = await response.json();
			setProductData(data);
		} catch (e) {
			throw new Error('failed to fetch products');
		}
		finally {

		}
	}

	useEffect(() => {
		loadData()
	}, [])
	useEffect(() => {
		const mapToSearch = productData?.products.map((p) => {
			p.title = p.title.trim().toLowerCase();
			return p;
		});
		console.log(mapToSearch);
		setproductsToShow(mapToSearch?.filter(p => {
			return p.title.includes(searchString.toLowerCase().trim()) || p.description.includes(searchString.toLowerCase().trim())
		}));
	}, [productData, searchString])

	return (
		<>
			<input value={searchString} onChange={e => setSearchString(e.target.value)}	></input>
			{productsToShow?.map((product: Product) => (
				<div key={product.id}>
					<p>id: {product.id}</p>
					<p>title: {product.title}</p>
					<p>description: {product.description}</p>
					<p>category: {product.category}</p>
					<p>rating: {product.rating}</p>
					<img src={product.thumbnail}></img>
				</div>
			))}
		</>
	);
}

