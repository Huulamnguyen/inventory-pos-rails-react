class CategoryProductsController < ApplicationController

    # for testing, delete later
    def index
        render json: CategoryProduct.all, status: :ok
    end

    def create
        category_product = CategoryProduct.create!(category_product_params)
        render json: category_product, status: :created
    end

    def destroy
        category_product = find_category_product
        category_product.destroy
        head :no_content
    end

    private
    
    def find_category_product
        CategoryProduct.find_by(id: params[:id])
    end

    def category_product_params
        params.permit(:product_id, :category_id)
    end
end
