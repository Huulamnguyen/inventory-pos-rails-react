class SupplierProduct < ApplicationRecord
  belongs_to :product
  belongs_to :supplier

  validates :supplier_id, uniqueness: {scope: :product_id, message: "contains this product"}
end
