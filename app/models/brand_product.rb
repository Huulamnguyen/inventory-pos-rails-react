class BrandProduct < ApplicationRecord
  belongs_to :product
  belongs_to :brand

  validates :brand_id, uniqueness: { scope: :product_id, message: "contains this product"}
end
