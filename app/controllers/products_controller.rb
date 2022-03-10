class ProductsController < ApplicationController
    
    # For testing Postman. Need to remove
    def index
        render json: Product.all, status: :ok
    end

    # For testing Postman. Need to remove
    def show
        product = find_product
        render json: product, status: :ok
    end

    def update
        product = find_product
        product.update!(product_params)
        render json: product, status: :ok
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    private
    
    def find_product
        Product.find_by(id: params[:id])
    end

    def product_params
        params.permit(:title, :description, :inventory, :image, :retail_price, :SKU, :store_id)
    end

end
