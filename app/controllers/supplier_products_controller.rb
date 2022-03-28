class SupplierProductsController < ApplicationController
    def index
        render json: SupplierProduct.all, status: :ok
    end

    def create
        supplier_product = SupplierProduct.create!(supplier_product_params)
        render json: supplier_product, status: :created
    end

    def destroy
        supplier_product = find_supplier_product
        supplier_product.destroy
        head :no_content
    end

    private
    
    def find_supplier_product
        SupplierProduct.find_by(id: params[:id])
    end

    def supplier_product_params
        params.permit(:product_id, :supplier_id)
    end
end
