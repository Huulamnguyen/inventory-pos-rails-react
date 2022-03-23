class CategoriesController < ApplicationController

    def index
        render json: Category.all, status: :ok
    end

    def show
        category = find_category
        render json: category, status: :ok
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def destroy
        category = find_category
        category.destroy
        head :no_content
    end

    def update
        category = find_category
        category.update!(category_params)
        render json: category, status: :ok
    end

    private

    def find_category
        Category.find_by(id:params[:id])
    end

    def category_params
        params.permit(:name, :description)
    end
end
