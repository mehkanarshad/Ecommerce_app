class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def show
    product = Product.find_by(params[:id])
    if product 
      render json: product
    else 
      render json: {error: 'Product not found'}, status: :not_found
    end
  end

  def update
    product = Product.find_by(params[:id])
    if product.update(product_params)
      render json: product
    else 
      render json: {error: product.errors.full_messages} , status: :unprocessable_entity
    end
  end

  def destroy
    product = Product.find_by(params[:id])
    if product
      product.destroy
      render json: {message: 'Produc deleted successfully'}
    else
      render json: {error: 'Product not found'}, status: :not_found
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :stock)
  end
end

