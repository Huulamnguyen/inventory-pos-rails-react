class CustomersController < ApplicationController
    def index
        render json: Customer.all, status: :ok
    end
    
    def create
        customer = Customer.create!(customer_params)
        render json: customer, status: :created
    end

    def update
        customer = find_customer
        customer.update!(customer_params)
        render json: customer, status: :ok
    end 

    def destroy
        customer = find_customer
        customer.destroy
        head :no_content
    end

    private
    
    def find_customer
        Customer.find_by(id: params[:id])
    end

    def customer_params
        params.permit(:first_name, :last_name, :address, :phone, :store_id)
    end

end
