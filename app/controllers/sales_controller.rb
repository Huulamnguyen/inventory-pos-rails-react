class SalesController < ApplicationController

    def index 
        render json: Sale.all, status: :ok 
    end

    def show 
        sale = find_sale
        render json: sale, status: :ok 
    end

    def update
        sale = find_sale
        sale.update!(sale_params)
        render json: sale, status: :ok
    end

    def create
        sale = Sale.create!(sale_params)
        render json: sale, status: :created
    end

    def destroy
        sale = find_sale
        sale.destroy
        head :no_content
    end
    
    private

    def find_sale
        Sale.find_by(id:params[:id])
    end

    def sale_params
        params.permit(:total_quantity, :total_price, :tax, :store_id)
    end

end
