class Brand < ApplicationRecord
    has_many :brand_products, dependent: :destroy
    has_many :products, through: :brand_products

    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
end
