class Category < ApplicationRecord
    # Association with Product Model
    has_many :category_products, dependent: :destroy
    has_many :products, through: :category_products

    validates :name, presence: true, uniqueness: true
end
