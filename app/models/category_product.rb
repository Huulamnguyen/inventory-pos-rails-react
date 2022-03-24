class CategoryProduct < ApplicationRecord
  belongs_to :category
  belongs_to :product

  validates :category_id, uniqueness: { scope: :product_id, message: "contains this product"}
end
