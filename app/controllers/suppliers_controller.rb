class SuppliersController < ApplicationController
    
    def index
        render json: Supplier.all, status: :ok
    end

    def show
        supplier = find_supplier
        render json: supplier, status: :ok
    end

    def create
        supplier = Supplier.create!(supplier_params)
        render json: supplier, status: :created
    end

    def destroy
        supplier = find_supplier
        supplier.destroy
        head :no_content
    end

    def update
        supplier = find_supplier
        supplier.update!(supplier_params)
        render json: supplier, status: :ok
    end

    private

    def find_supplier
        Supplier.find_by(id:params[:id])
    end

    def supplier_params
        params.permit(:name, :address, :phone, :email)
    end
end