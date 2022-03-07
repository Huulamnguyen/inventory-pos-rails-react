class StoresController < ApplicationController

    def index
        render json: current_user.stores.all, status: :ok
    end

    def create
        store = current_user.stores.create!(store_params)
        render json: store, status: :created
    end

    def show
        store = find_store_of_current_user
        render json: store, status: :ok
    end

    def update
        store = find_store_of_current_user
        store.update!(store_params)
        render json: store, status: :ok
    end

    def destroy
        store = find_store_of_current_user
        store.destroy
        head :no_content
    end


    private

    def find_store_of_current_user
        current_user.stores.find(params[:id])
    end

    def store_params
        params.permit(:store_name, :address)
    end
end
