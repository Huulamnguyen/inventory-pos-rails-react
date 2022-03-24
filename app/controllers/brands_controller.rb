class BrandsController < ApplicationController

    def index
        render json: Brand.all, status: :ok
    end

    def show
        brand = find_brand
        render json: brand, status: :ok
    end

    def create
        brand = Brand.create!(brand_params)
        render json: brand, status: :created
    end

    def destroy
        brand = find_brand
        brand.destroy
        head :no_content
    end

    def update
        brand = find_brand
        brand.update!(brand_params)
        render json: brand, status: :ok
    end

    private

    def find_brand
        Brand.find_by(id:params[:id])
    end

    def brand_params
        params.permit(:name, :description)
    end
end
