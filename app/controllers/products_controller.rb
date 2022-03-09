class ProductsController < ApplicationController
    def index
        render json: Product.all, status: :ok
    end

    def show
        product = find_product
        render json: product, status: :ok
    end

    private
    
    def find_product
        Product.find_by(id: params[:id])
    end

end
