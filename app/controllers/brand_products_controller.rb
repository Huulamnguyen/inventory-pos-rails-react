class BrandProductsController < ApplicationController

    def index
        render json: BrandProduct.all, status: :ok
    end

    def create
        brand_product = BrandProduct.create!(brand_product_params)
        render json: brand_product, status: :created
    end

    def destroy
        brand_product = find_brand_product
        brand_product.destroy
        head :no_content
    end

    private
    
    def find_brand_product
        BrandProduct.find_by(id: params[:id])
    end

    def brand_product_params
        params.permit(:product_id, :brand_id)
    end
end
