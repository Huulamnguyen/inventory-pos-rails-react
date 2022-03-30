class SaleDetail < ApplicationRecord
  belongs_to :product
  belongs_to :sale

  validates :quantity, presence: true, numericality: {equal_or_greater_than: 0}
end
