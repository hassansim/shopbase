import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import { ShoppingCart, ChevronRight } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import toast from "react-hot-toast";

const ProductPage = () => {
	const { id } = useParams();
	const { fetchProductById, currentProduct, loading } = useProductStore();
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const [pageLoading, setPageLoading] = useState(true);

	useEffect(() => {
		if (id) {
			setPageLoading(true);
			fetchProductById(id)
				.then(() => setPageLoading(false))
				.catch(() => setPageLoading(false));
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [fetchProductById, id]);

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}
		if (currentProduct) {
			addToCart(currentProduct);
		}
	};

	if (loading || pageLoading) return <LoadingSpinner />;

	if (!currentProduct || !currentProduct._id) {
		return (
			<div className='min-h-[50vh] flex flex-col items-center justify-center text-center px-4'>
				<h2 className='text-2xl font-bold text-gray-200 mb-2'>Product Not Found</h2>
				<p className='text-gray-400 mb-4'>The product you are looking for does not exist.</p>
				<Link to='/' className='text-emerald-400 hover:underline'>
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className='min-h-screen py-8 md:py-12'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Breadcrumb */}
				<nav className='flex items-center gap-2 text-sm text-gray-400 mb-6'>
					<Link to='/' className='hover:text-emerald-400 transition'>
						Home
					</Link>
					<ChevronRight size={14} className='text-gray-600' />
					<Link
						to={`/category/${currentProduct.category}`}
						className='capitalize hover:text-emerald-400 transition'
					>
						{currentProduct.category}
					</Link>
					<ChevronRight size={14} className='text-gray-600' />
					<span className='text-gray-300 truncate'>{currentProduct.name}</span>
				</nav>

				{/* Product Container */}
				<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl border border-gray-700 p-6 md:p-8 shadow-xl'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
						{/* Product Image */}
						<div className='overflow-hidden rounded-lg border border-gray-700 bg-gray-900'>
							<img
								src={currentProduct.image}
								alt={currentProduct.name}
								className='w-full h-80 sm:h-96 object-cover'
							/>
						</div>

						{/* Product Details */}
						<div className='flex flex-col justify-between h-full'>
							<div>
								<span className='text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase'>
									{currentProduct.category}
								</span>
								<h1 className='text-2xl sm:text-3xl font-bold text-white mt-3'>
									{currentProduct.name}
								</h1>
								<div className='mt-3'>
									<span className='text-3xl font-bold text-emerald-400'>
										${Number(currentProduct.price).toFixed(2)}
									</span>
								</div>
								<div className='mt-6 border-t border-gray-700 pt-4'>
									<h4 className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-2'>
										Description
									</h4>
									<p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
										{currentProduct.description}
									</p>
								</div>
							</div>

							<div className='mt-8 pt-6 border-t border-gray-700'>
								<button
									className='flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition duration-200'
									onClick={handleAddToCart}
								>
									<ShoppingCart size={20} className='mr-2' />
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Recommendations */}
				<div className='mt-12'>
					<PeopleAlsoBought />
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
