class CategoriesController < ApplicationController

    def index
        render json: Category.all, status: :ok
    end

    def show
        category = find_category
        render json: category, status: :ok
    end

    def find_category
        Category.find_by(id:params[:id])
    end
end
