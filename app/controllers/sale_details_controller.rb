class SaleDetailsController < ApplicationController

    def index
        render json: SaleDetail.all, status: :ok
    end

    def create
        sale_detail = SaleDetail.create!(sale_detail_params)
        render json: sale_detail, status: :created
    end

    def update
        sale_detail = find_sale_detail
        sale_detail.update!(sale_detail_params)
        render json: sale_detail, status: :ok
    end

    def destroy
        sale_detail = find_sale_detail
        sale_detail.destroy
        head :no_content
    end

    private
    
    def find_sale_detail
        SaleDetail.find_by(id: params[:id])
    end

    def sale_detail_params
        params.permit(:product_id, :sale_id, :quantity)
    end

end
