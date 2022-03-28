class Supplier < ApplicationRecord
    has_many :supplier_products, dependent: :destroy
    has_many :products, through: :supplier_products

    validates :name, presence: true, uniqueness: true
    validates :address, presence: true
end
