import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './address'
export * from './addresses'
export * from './addToCart'
export * from './blog'
export * from './blogs'
export * from './cart'
export * from './cashfreePayNowNew'
export * from './categories'
export * from './category'
export * from './changePassword'
export * from './checkout'
export * from './checkWishlist'
export * from './countries'
export * from './country'
export * from './deleteAddress'
export * from './deleteBlog'
export * from './deleteCountry'
export * from './deletePaymentMethod'
export * from './emailPassword'
export * from './getOtp'
export * from './HOME'
export * from './INIT'
export * from './login'
export * from './me'
export * from './megamenu'
export * from './myAddresses'
export * from './myOrderItems'
export * from './myOrders'
export * from './myWishlist'
export * from './orderItem'
export * from './paymentMethod'
export * from './paymentMethods'
export * from './paymentMethodsAdmin'
export * from './paySuccessPageHit'
export * from './popularSearches'
export * from './product'
export * from './productReviews'
export * from './products'
export * from './productSlug'
export * from './randomVendors'
export * from './removeStoreCountry'
export * from './resendEmail'
export * from './reviews'
export * from './saveAddress'
export * from './saveBlog'
export * from './saveCountry'
export * from './savePaymentMethod'
export * from './saveStoreCountry'
export * from './settings'
export * from './signOut'
export * from './states'
export * from './store'
export * from './storeCountries'
export * from './storeCountry'
export * from './storeOne'
export * from './stripe'
export * from './toggleWishlist'
export * from './topVendors'
export * from './updateProfile'
export * from './vendor'
export * from './vendorProfile'
export * from './verifyEmail'
export * from './verifyOtp'