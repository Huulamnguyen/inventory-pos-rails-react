class SalesController < ApplicationController

    def index 
        render json: Sale.all, status: :ok 
    end

    def show 
        sale = find_sale
        render json: sale, status: :ok 
    end
    
    private

    def find_sale
        Sale.find_by(id:params[:id])
    end



end
